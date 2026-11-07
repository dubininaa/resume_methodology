import { ArrowUpRight } from "lucide-react";

export default function WorkSamplesLink() {
  return (
    <section id="work-samples" className="scroll-mt-20 border-t border-white/15 bg-black py-12 text-white md:py-16" aria-labelledby="work-samples-heading">
      <div className="container mx-auto flex flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">За каждым курсом — методическая работа</p>
          <h2 id="work-samples-heading" className="font-display text-2xl font-bold uppercase tracking-wider md:text-3xl">Примеры работ</h2>
          <p className="mt-4 text-base leading-7 text-white/65">Программы курсов, задания, карты пути студента и рабочие тетради. Фрагменты реальных материалов — чтобы посмотреть, как я проектирую обучение и организую разработку.</p>
        </div>
        <a href={`${import.meta.env.BASE_URL}work-samples.html`} className="inline-flex w-fit shrink-0 items-center gap-4 border border-primary bg-primary px-6 py-4 text-sm font-semibold text-black transition-colors hover:bg-transparent hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
          Посмотреть рабочие материалы <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
