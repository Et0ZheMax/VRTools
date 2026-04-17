export const clampNumber = (value: number, min = 0): number => {
  if (!Number.isFinite(value)) {
    return min;
  }

  return Math.max(value, min);
};

export const parseNumericInput = (value: string): number => {
  if (value.trim() === "") {
    return 0;
  }

  const numeric = Number(value.replace(/,/g, "."));
  return clampNumber(numeric, 0);
};

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("ru-RU").format(Math.floor(clampNumber(value, 0)));
};

export const toSlug = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
