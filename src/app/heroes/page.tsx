"use client";

import { useMemo, useState } from "react";
import { HeroCard } from "@/components/heroes/HeroCard";
import { HeroFilters } from "@/components/heroes/HeroFilters";
import { heroes, type HeroRarity, type HeroRole } from "@/data/heroes";

export default function HeroesPage(): JSX.Element {
  const [role, setRole] = useState<HeroRole | "All">("All");
  const [rarity, setRarity] = useState<HeroRarity | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return heroes.filter((hero) => {
      const roleOk = role === "All" || hero.role === role;
      const rarityOk = rarity === "All" || hero.rarity === rarity;
      const queryOk = hero.name.toLowerCase().includes(query.trim().toLowerCase());
      return roleOk && rarityOk && queryOk;
    });
  }, [role, rarity, query]);

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-accent">Heroes Database</h1>
      <p className="mb-4 text-sm text-amber-300">
        Sample data for MVP. Replace with verified in-game values in production.
      </p>
      <HeroFilters
        role={role}
        rarity={rarity}
        query={query}
        onRoleChange={setRole}
        onRarityChange={setRarity}
        onQueryChange={setQuery}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((hero) => (
          <HeroCard key={hero.slug} hero={hero} />
        ))}
      </div>
      {filtered.length === 0 ? <p className="mt-4 text-slate-300">Ничего не найдено по заданным фильтрам.</p> : null}
    </div>
  );
}
