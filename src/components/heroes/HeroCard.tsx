import Link from "next/link";
import type { Hero } from "@/data/heroes";
import { Card } from "@/components/ui/Card";

type HeroCardProps = {
  hero: Hero;
};

export const HeroCard = ({ hero }: HeroCardProps): JSX.Element => {
  return (
    <Card className="h-full">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="text-lg font-semibold">{hero.name}</h3>
        <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-300">{hero.rarity}</span>
      </div>
      <p className="mb-2 text-sm text-slate-300">{hero.role}</p>
      <p className="mb-3 text-sm text-slate-400">{hero.description}</p>
      <Link href={`/heroes/${hero.slug}`} className="inline-block rounded-lg bg-accent px-3 py-2 text-sm font-medium text-black hover:bg-amber-400">
        Подробнее
      </Link>
    </Card>
  );
};
