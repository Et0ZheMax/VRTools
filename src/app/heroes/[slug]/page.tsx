import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { heroes } from "@/data/heroes";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const hero = heroes.find((item) => item.slug === params.slug);
  if (!hero) {
    return { title: "Hero Not Found | Viking Rise Tools" };
  }

  return {
    title: `${hero.name} | Viking Rise Tools`,
    description: hero.description
  };
}

export default function HeroDetailsPage({ params }: { params: { slug: string } }): JSX.Element {
  const hero = heroes.find((item) => item.slug === params.slug);
  if (!hero) {
    notFound();
  }

  return (
    <article className="rounded-2xl border border-slate-800 bg-panel p-6 shadow-card">
      <p className="mb-1 text-sm text-amber-300">Sample hero data</p>
      <h1 className="mb-2 text-3xl font-bold text-accent">{hero.name}</h1>
      <p className="mb-4 text-slate-300">
        {hero.role} • {hero.rarity}
      </p>
      <p className="mb-5 text-slate-200">{hero.description}</p>

      <section className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">Strengths</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          {hero.strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="mb-2 text-lg font-semibold">Weaknesses</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          {hero.weaknesses.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-semibold">Best for</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-300">
          {hero.bestFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
