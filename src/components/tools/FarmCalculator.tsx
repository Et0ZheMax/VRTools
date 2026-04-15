"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { calculateFarm, type FarmInput } from "@/lib/calculators/farm";
import { formatNumber, parseNumericInput } from "@/lib/utils";

const initialState: FarmInput = {
  farms: 0,
  foodPerDay: 0,
  woodPerDay: 0,
  stonePerDay: 0,
  goldPerDay: 0,
  days: 0
};

export const FarmCalculator = (): JSX.Element => {
  const [input, setInput] = useState<FarmInput>(initialState);
  const result = useMemo(() => calculateFarm(input), [input]);

  const update = (key: keyof FarmInput, raw: string): void => {
    setInput((prev) => ({ ...prev, [key]: parseNumericInput(raw) }));
  };

  return (
    <Card title="Farm Calculator">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label htmlFor="farms">Количество ферм</label>
          <input id="farms" type="number" min={0} onChange={(e) => update("farms", e.target.value)} />
        </div>
        <div>
          <label htmlFor="days">Период (дней)</label>
          <input id="days" type="number" min={0} onChange={(e) => update("days", e.target.value)} />
        </div>
        <div>
          <label htmlFor="foodPerDay">Food / день</label>
          <input id="foodPerDay" type="number" min={0} onChange={(e) => update("foodPerDay", e.target.value)} />
        </div>
        <div>
          <label htmlFor="woodPerDay">Wood / день</label>
          <input id="woodPerDay" type="number" min={0} onChange={(e) => update("woodPerDay", e.target.value)} />
        </div>
        <div>
          <label htmlFor="stonePerDay">Stone / день</label>
          <input id="stonePerDay" type="number" min={0} onChange={(e) => update("stonePerDay", e.target.value)} />
        </div>
        <div>
          <label htmlFor="goldPerDay">Gold / день</label>
          <input id="goldPerDay" type="number" min={0} onChange={(e) => update("goldPerDay", e.target.value)} />
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-sm">
        <p>Total: {formatNumber(result.total)}</p>
        <p>Средний доход в день: {formatNumber(result.averagePerDay)}</p>
        <p>Рекомендация: {result.recommendation}</p>
        <div className="mt-2 grid gap-1">
          {Object.entries(result.byResource).map(([key, value]) => (
            <p key={key}>
              {key}: {formatNumber(value)}
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
};
