import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import WorkSamples from "@/components/WorkSamples";
import Contact from "@/components/Contact";

export default function WorkSamplesPage() {
  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <Navigation currentPage="work-samples" />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-6">
          <a href={`${import.meta.env.BASE_URL}#portfolio`} className="inline-flex items-center gap-3 text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            <ArrowLeft size={18} aria-hidden="true" /> На главную, к портфолио
          </a>
        </div>
        <WorkSamples />
        <Contact />
      </main>
    </div>
  );
}
