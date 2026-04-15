"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import {
  calculateTotalSpeedupMinutes,
  formatMinutesToDHM,
  hasEnoughSpeedups,
  speedupDurations,
  type SpeedupInput
} from "@/lib/calculators/speedups";
import { parseNumericInput } from "@/lib/utils";

const labels: Record<keyof SpeedupInput, string> = {
  minute1: "1 minute",
  minute5: "5 minutes",
  minute15: "15 minutes",
  minute30: "30 minutes",
  hour1: "1 hour",
  hour3: "3 hours",
  hour8: "8 hours",
  hour24: "24 hours"
};

export const SpeedupCalculator = (): JSX.Element => {
  const [counts, setCounts] = useState<SpeedupInput>({
    minute1: 0,
    minute5: 0,
    minute15: 0,
    minute30: 0,
    hour1: 0,
    hour3: 0,
    hour8: 0,
    hour24: 0
  });
  const [requiredMinutes, setRequiredMinutes] = useState(0);

  const totalMinutes = useMemo(() => calculateTotalSpeedupMinutes(counts), [counts]);
  const enough = hasEnoughSpeedups(totalMinutes, requiredMinutes);

  return (
    <Card title="Speedup Calculator">
      <div className="grid gap-3 md:grid-cols-2">
        {(Object.keys(speedupDurations) as Array<keyof SpeedupInput>).map((key) => (
          <div key={key}>
            <label htmlFor={key}>{labels[key]}</label>
            <input
              id={key}
              type="number"
              min={0}
              onChange={(e) => setCounts((prev) => ({ ...prev, [key]: parseNumericInput(e.target.value) }))}
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label htmlFor="requiredMinutes">Required time (minutes)</label>
        <input
          id="requiredMinutes"
          type="number"
          min={0}
          onChange={(e) => setRequiredMinutes(parseNumericInput(e.target.value))}
        />
      </div>

      <div className="mt-5 rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-sm">
        <p>Всего ускорений: {formatMinutesToDHM(totalMinutes)}</p>
        <p>Требуется: {formatMinutesToDHM(requiredMinutes)}</p>
        <p className={enough ? "text-emerald-300" : "text-rose-300"}>{enough ? "Ускорений хватает" : "Ускорений не хватает"}</p>
      </div>
    </Card>
  );
};
