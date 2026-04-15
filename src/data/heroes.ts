export type HeroRole = "Infantry" | "Archer" | "Pikeman" | "Leader" | "Gathering" | "Support";
export type HeroRarity = "Legendary" | "Epic" | "Rare";

export type Hero = {
  slug: string;
  name: string;
  role: HeroRole;
  rarity: HeroRarity;
  element?: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  bestFor: string[];
};

// SAMPLE DATA: placeholder hero values for MVP UI/testing. Replace with verified in-game data later.
export const heroes: Hero[] = [
  {
    slug: "ragnar-stormborn",
    name: "Ragnar Stormborn",
    role: "Leader",
    rarity: "Legendary",
    element: "Thunder",
    description: "Frontline commander with burst rally damage.",
    strengths: ["Rally damage", "Morale buffs", "Good in events"],
    weaknesses: ["Weak sustain", "Expensive to max"],
    bestFor: ["Alliance rallies", "Boss fights"]
  },
  {
    slug: "eir-windseer",
    name: "Eir Windseer",
    role: "Support",
    rarity: "Epic",
    element: "Wind",
    description: "Support hero with healing pulses and speed boosts.",
    strengths: ["Team healing", "March speed", "F2P-friendly"],
    weaknesses: ["Low direct damage"],
    bestFor: ["Open field", "Sustained combat"]
  },
  {
    slug: "bjorn-ironwall",
    name: "Bjorn Ironwall",
    role: "Infantry",
    rarity: "Legendary",
    description: "Durable infantry specialist for prolonged fights.",
    strengths: ["High defense", "Counterattack scaling"],
    weaknesses: ["Slow march"],
    bestFor: ["City defense", "Frontline tanking"]
  },
  {
    slug: "sigrid-frostarrow",
    name: "Sigrid Frostarrow",
    role: "Archer",
    rarity: "Epic",
    description: "Archer control hero with single-target pressure.",
    strengths: ["Control effects", "Boss damage"],
    weaknesses: ["Squishy"],
    bestFor: ["PvE bosses", "Event scoring"]
  },
  {
    slug: "ivar-oakpike",
    name: "Ivar Oakpike",
    role: "Pikeman",
    rarity: "Rare",
    description: "Reliable early-game pikeman commander.",
    strengths: ["Easy upgrades", "Stable damage"],
    weaknesses: ["Falls off late game"],
    bestFor: ["Early progression", "Neutral units"]
  },
  {
    slug: "thora-harvesthand",
    name: "Thora Harvesthand",
    role: "Gathering",
    rarity: "Epic",
    description: "Gathering specialist for long farm cycles.",
    strengths: ["Gather speed", "Load bonus"],
    weaknesses: ["No combat utility"],
    bestFor: ["Resource collection", "Offline farming"]
  },
  {
    slug: "ulfric-bloodspear",
    name: "Ulfric Bloodspear",
    role: "Pikeman",
    rarity: "Legendary",
    description: "Aggressive pike hero with anti-cavalry bonuses.",
    strengths: ["High burst", "Good vs cavalry"],
    weaknesses: ["Needs investment"],
    bestFor: ["Field fights", "Clash events"]
  },
  {
    slug: "astrid-crowguard",
    name: "Astrid Crowguard",
    role: "Archer",
    rarity: "Rare",
    description: "Budget archer hero for garrison and PvE.",
    strengths: ["Accessible", "Balanced kit"],
    weaknesses: ["Lower cap"],
    bestFor: ["Starter builds", "PvE maps"]
  },
  {
    slug: "leif-goldwarden",
    name: "Leif Goldwarden",
    role: "Gathering",
    rarity: "Rare",
    description: "Gold-oriented gathering option for mid game.",
    strengths: ["Gold gather buffs", "Utility talents"],
    weaknesses: ["Niche usage"],
    bestFor: ["Gold deficit recovery"]
  },
  {
    slug: "freya-runeheart",
    name: "Freya Runeheart",
    role: "Support",
    rarity: "Legendary",
    description: "Hybrid support with shields and rage recovery.",
    strengths: ["Shield uptime", "Rage generation"],
    weaknesses: ["Complex rotations"],
    bestFor: ["Late game teams", "Large scale PvP"]
  }
];
