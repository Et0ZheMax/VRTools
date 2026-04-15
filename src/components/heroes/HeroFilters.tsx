"use client";

import { Search } from "lucide-react";
import type { HeroRarity, HeroRole } from "@/data/heroes";

type HeroFiltersProps = {
  role: HeroRole | "All";
  rarity: HeroRarity | "All";
  query: string;
  onRoleChange: (value: HeroRole | "All") => void;
  onRarityChange: (value: HeroRarity | "All") => void;
  onQueryChange: (value: string) => void;
};

const roleOptions: Array<HeroRole | "All"> = ["All", "Infantry", "Archer", "Pikeman", "Leader", "Gathering", "Support"];
const rarityOptions: Array<HeroRarity | "All"> = ["All", "Legendary", "Epic", "Rare"];

export const HeroFilters = ({
  role,
  rarity,
  query,
  onRoleChange,
  onRarityChange,
  onQueryChange
}: HeroFiltersProps): JSX.Element => {
  return (
    <div className="mb-5 grid gap-3 md:grid-cols-3">
      <div>
        <label htmlFor="role">Role</label>
        <select id="role" value={role} onChange={(e) => onRoleChange(e.target.value as HeroRole | "All")}>
          {roleOptions.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="rarity">Rarity</label>
        <select id="rarity" value={rarity} onChange={(e) => onRarityChange(e.target.value as HeroRarity | "All")}>
          {rarityOptions.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="query">Search</label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-2.5 text-slate-500" size={18} />
          <input
            id="query"
            className="pl-9"
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Hero name"
          />
        </div>
      </div>
    </div>
  );
};
