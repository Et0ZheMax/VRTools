import { clampNumber } from "@/lib/utils";

export const speedupDurations = {
  minute1: 1,
  minute5: 5,
  minute15: 15,
  minute30: 30,
  hour1: 60,
  hour3: 180,
  hour8: 480,
  hour24: 1440
} as const;

export type SpeedupInput = Record<keyof typeof speedupDurations, number>;

export const calculateTotalSpeedupMinutes = (input: Partial<SpeedupInput>): number => {
  return (Object.keys(speedupDurations) as Array<keyof typeof speedupDurations>).reduce((total, key) => {
    const count = clampNumber(Number(input[key] ?? 0), 0);
    return total + count * speedupDurations[key];
  }, 0);
};

export const formatMinutesToDHM = (minutes: number): string => {
  const safeMinutes = clampNumber(minutes, 0);
  const days = Math.floor(safeMinutes / 1440);
  const hours = Math.floor((safeMinutes % 1440) / 60);
  const mins = safeMinutes % 60;
  return `${days}d ${hours}h ${mins}m`;
};

export const hasEnoughSpeedups = (availableMinutes: number, requiredMinutes: number): boolean => {
  return clampNumber(availableMinutes, 0) >= clampNumber(requiredMinutes, 0);
};
