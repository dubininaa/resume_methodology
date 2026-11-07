import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation({ currentPage = "home" }: { currentPage?: "home" | "work-samples" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const homeAnchor = (anchor: string) => currentPage === "home" ? anchor : `${import.meta.env.BASE_URL}${anchor}`;
  const navItems = [
    { name: "Обо мне", href: homeAnchor("#about") },
    { name: "Портфолио", href: homeAnchor("#portfolio") },
    { name: "Примеры работ", href: `${import.meta.env.BASE_URL}work-samples.html` },
    { name: "Навыки", href: homeAnchor("#skills") },
    { name: "Контакты", href: "#contact" },
  ];

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (!href.startsWith("#") || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const element = document.querySelector(href);
    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-gray-100" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href={homeAnchor("#hero")}
          onClick={(e) => handleLinkClick(e, homeAnchor("#hero"))}
          className="flex max-w-[calc(100%-3rem)] items-center gap-2 font-display text-sm font-bold tracking-tight sm:text-base lg:text-lg"
        >
          <span className="sm:whitespace-nowrap">Анастасия Дубинина</span>
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              aria-current={currentPage === "work-samples" && item.name === "Примеры работ" ? "page" : undefined}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden p-2"
          aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-current={currentPage === "work-samples" && item.name === "Примеры работ" ? "page" : undefined}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
