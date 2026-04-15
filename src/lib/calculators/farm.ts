import { clampNumber } from "@/lib/utils";

export type FarmInput = {
  farms: number;
  foodPerDay: number;
  woodPerDay: number;
  stonePerDay: number;
  goldPerDay: number;
  days: number;
};

export type FarmResult = {
  byResource: {
    Food: number;
    Wood: number;
    Stone: number;
    Gold: number;
  };
  total: number;
  averagePerDay: number;
  recommendation: "Мало" | "Нормально" | "Отлично";
};

export const calculateFarm = (input: Partial<FarmInput>): FarmResult => {
  const farms = clampNumber(Number(input.farms ?? 0), 0);
  const days = clampNumber(Number(input.days ?? 0), 0);

  const food = farms * clampNumber(Number(input.foodPerDay ?? 0), 0) * days;
  const wood = farms * clampNumber(Number(input.woodPerDay ?? 0), 0) * days;
  const stone = farms * clampNumber(Number(input.stonePerDay ?? 0), 0) * days;
  const gold = farms * clampNumber(Number(input.goldPerDay ?? 0), 0) * days;

  const total = food + wood + stone + gold;
  const averagePerDay = days === 0 ? 0 : total / days;

  const recommendation: FarmResult["recommendation"] =
    averagePerDay < 400_000 ? "Мало" : averagePerDay < 1_000_000 ? "Нормально" : "Отлично";

  return {
    byResource: {
      Food: food,
      Wood: wood,
      Stone: stone,
      Gold: gold
    },
    total,
    averagePerDay,
    recommendation
  };
};
