"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { emptyResources, resourceKeys, type ResourceMap } from "@/data/resources";
import { calculateResources } from "@/lib/calculators/resources";
import { formatNumber, parseNumericInput } from "@/lib/utils";

export const ResourceCalculator = (): JSX.Element => {
  const [current, setCurrent] = useState<ResourceMap>(emptyResources);
  const [required, setRequired] = useState<ResourceMap>(emptyResources);

  const result = useMemo(() => calculateResources(current, required), [current, required]);

  const onChange = (type: "current" | "required", key: keyof ResourceMap, raw: string): void => {
    const value = parseNumericInput(raw);
    if (type === "current") {
      setCurrent((prev) => ({ ...prev, [key]: value }));
      return;
    }

    setRequired((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card title="Resource Calculator">
      <p className="mb-4 text-sm text-slate-300">Пустые/некорректные значения считаются как 0.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 font-semibold">Current</h4>
          <div className="grid gap-3">
            {resourceKeys.map((key) => (
              <div key={`current-${key}`}>
                <label htmlFor={`current-${key}`}>{key}</label>
                <input
                  id={`current-${key}`}
                  type="number"
                  min={0}
                  onChange={(e) => onChange("current", key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">Required</h4>
          <div className="grid gap-3">
            {resourceKeys.map((key) => (
              <div key={`required-${key}`}>
                <label htmlFor={`required-${key}`}>{key}</label>
                <input
                  id={`required-${key}`}
                  type="number"
                  min={0}
                  onChange={(e) => onChange("required", key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-700 bg-slate-900/70 p-4">
        <p className="font-medium">Общий прогресс: {result.progressPercent.toFixed(1)}%</p>
        <div className="mt-3 grid gap-2 text-sm md:grid-cols-2">
          <div>
            <p className="mb-1 font-semibold text-rose-300">Не хватает:</p>
            {resourceKeys.map((key) => (
              <p key={`missing-${key}`}>
                {key}: {formatNumber(result.missing[key])}
              </p>
            ))}
          </div>
          <div>
            <p className="mb-1 font-semibold text-emerald-300">Избыток:</p>
            {resourceKeys.map((key) => (
              <p key={`excess-${key}`}>
                {key}: {formatNumber(result.excess[key])}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
