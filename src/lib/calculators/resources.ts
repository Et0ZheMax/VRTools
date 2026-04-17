import { emptyResources, resourceKeys, type ResourceMap } from "@/data/resources";
import { clampNumber } from "@/lib/utils";

export type ResourceCalculation = {
  missing: ResourceMap;
  excess: ResourceMap;
  progressPercent: number;
};

export const sanitizeResourceMap = (input: Partial<Record<keyof ResourceMap, number>>): ResourceMap => {
  return resourceKeys.reduce<ResourceMap>((acc, key) => {
    const value = input[key];
    acc[key] = clampNumber(Number(value ?? 0), 0);
    return acc;
  }, { ...emptyResources });
};

export const calculateResources = (currentInput: Partial<ResourceMap>, requiredInput: Partial<ResourceMap>): ResourceCalculation => {
  const current = sanitizeResourceMap(currentInput);
  const required = sanitizeResourceMap(requiredInput);

  const missing = { ...emptyResources };
  const excess = { ...emptyResources };

  let currentTotal = 0;
  let requiredTotal = 0;

  for (const key of resourceKeys) {
    const diff = current[key] - required[key];
    if (diff >= 0) {
      excess[key] = diff;
    } else {
      missing[key] = Math.abs(diff);
    }

    currentTotal += current[key];
    requiredTotal += required[key];
  }

  const progressPercent = requiredTotal === 0 ? 100 : Math.min((currentTotal / requiredTotal) * 100, 100);

  return { missing, excess, progressPercent };
};
