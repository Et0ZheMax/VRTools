import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Viking Rise Tools",
  description: "About Viking Rise Tools fan-made MVP project."
};

export default function AboutPage(): JSX.Element {
  return (
    <article className="rounded-2xl border border-slate-800 bg-panel p-6 shadow-card">
      <h1 className="mb-3 text-3xl font-bold text-accent">About Viking Rise Tools</h1>
      <p className="mb-3 text-slate-200">
        Viking Rise Tools — фанатский MVP-проект с калькуляторами, базой героев и заготовками под гайды.
      </p>
      <p className="text-slate-300">
        Дисклеймер: это неофициальный сайт. Он не связан с разработчиками или издателями Viking Rise.
      </p>
    </article>
  );
}
