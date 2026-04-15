export const resourceKeys = ["Food", "Wood", "Stone", "Gold", "Gems"] as const;

export type ResourceKey = (typeof resourceKeys)[number];

export type ResourceMap = Record<ResourceKey, number>;

export const emptyResources: ResourceMap = {
  Food: 0,
  Wood: 0,
  Stone: 0,
  Gold: 0,
  Gems: 0
};
