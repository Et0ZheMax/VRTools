import { clampNumber } from "@/lib/utils";

export type PlayStyle = "F2P" | "Moderate" | "Heavy spender";

export type PlannerInput = {
  currentLevel: number;
  targetLevel: number;
  playStyle: PlayStyle;
  farms: number;
  hoursPerDay: number;
};

export type PlannerResult = {
  summary: string;
  focus: string[];
  warnings: string[];
  nextSteps: string[];
};

export const calculateDevelopmentPlan = (input: Partial<PlannerInput>): PlannerResult => {
  const currentLevel = clampNumber(Number(input.currentLevel ?? 0), 0);
  const targetLevel = clampNumber(Number(input.targetLevel ?? 0), 0);
  const farms = clampNumber(Number(input.farms ?? 0), 0);
  const hoursPerDay = clampNumber(Number(input.hoursPerDay ?? 0), 0);
  const playStyle = input.playStyle ?? "F2P";

  const levelGap = Math.max(targetLevel - currentLevel, 0);
  const focus: string[] = ["Ежедневные активности", "Технологии в академии", "Оптимизация маршей"];
  const warnings: string[] = [];

  if (farms < 2) {
    warnings.push("Мало ферм: может возникнуть дефицит базовых ресурсов.");
  }

  if (hoursPerDay < 1.5) {
    warnings.push("Низкая активность: используйте более длинные очереди улучшений.");
  }

  if (levelGap > 15) {
    warnings.push("Большой разрыв уровней: ставьте промежуточные цели каждые 5 уровней.");
  }

  if (playStyle === "F2P") {
    focus.push("События с бесплатными ускорениями", "Сбор легендарных фрагментов через ивенты");
  } else if (playStyle === "Moderate") {
    focus.push("Оптимальные пакеты ускорений", "Синхронизация покупок с ивентами");
  } else {
    focus.push("Rally-команды под PvP", "Максимизация ивентов лидерборда");
  }

  const summary =
    levelGap === 0
      ? "Цель уже достигнута. Можно сместить фокус на героев и ивенты."
      : `До цели примерно ${levelGap} уровней. Планируйте улучшения блоками по 2-3 здания.`;

  const nextSteps = [
    "Проверьте склад ресурсов и дефицитные категории.",
    "Запланируйте улучшения HQ/Academy на 3 дня вперед.",
    "Согласуйте время ускорений с союзом и ивентами.",
    "Раз в неделю корректируйте план по фактическому прогрессу."
  ];

  return {
    summary,
    focus,
    warnings,
    nextSteps
  };
};
