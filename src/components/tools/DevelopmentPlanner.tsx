"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { calculateDevelopmentPlan, type PlannerInput, type PlayStyle } from "@/lib/calculators/planner";
import { parseNumericInput } from "@/lib/utils";

const initial: PlannerInput = {
  currentLevel: 1,
  targetLevel: 10,
  playStyle: "F2P",
  farms: 1,
  hoursPerDay: 1
};

export const DevelopmentPlanner = (): JSX.Element => {
  const [input, setInput] = useState<PlannerInput>(initial);
  const result = useMemo(() => calculateDevelopmentPlan(input), [input]);

  return (
    <Card title="Development Planner (MVP)">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label htmlFor="currentLevel">Текущий уровень</label>
          <input
            id="currentLevel"
            type="number"
            min={0}
            defaultValue={initial.currentLevel}
            onChange={(e) => setInput((prev) => ({ ...prev, currentLevel: parseNumericInput(e.target.value) }))}
          />
        </div>
        <div>
          <label htmlFor="targetLevel">Цель (уровень)</label>
          <input
            id="targetLevel"
            type="number"
            min={0}
            defaultValue={initial.targetLevel}
            onChange={(e) => setInput((prev) => ({ ...prev, targetLevel: parseNumericInput(e.target.value) }))}
          />
        </div>
        <div>
          <label htmlFor="playStyle">Стиль игры</label>
          <select
            id="playStyle"
            defaultValue={initial.playStyle}
            onChange={(e) => setInput((prev) => ({ ...prev, playStyle: e.target.value as PlayStyle }))}
          >
            <option value="F2P">F2P</option>
            <option value="Moderate">Moderate</option>
            <option value="Heavy spender">Heavy spender</option>
          </select>
        </div>
        <div>
          <label htmlFor="farms">Количество ферм</label>
          <input
            id="farms"
            type="number"
            min={0}
            defaultValue={initial.farms}
            onChange={(e) => setInput((prev) => ({ ...prev, farms: parseNumericInput(e.target.value) }))}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="hoursPerDay">Часов онлайн в день</label>
          <input
            id="hoursPerDay"
            type="number"
            min={0}
            step="0.5"
            defaultValue={initial.hoursPerDay}
            onChange={(e) => setInput((prev) => ({ ...prev, hoursPerDay: parseNumericInput(e.target.value) }))}
          />
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-sm">
        <p className="mb-2 text-base font-medium">{result.summary}</p>
        <p className="mb-1 font-semibold text-accent">Фокус:</p>
        <ul className="mb-3 list-disc space-y-1 pl-5">
          {result.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {result.warnings.length > 0 ? (
          <>
            <p className="mb-1 font-semibold text-amber-300">Предупреждения:</p>
            <ul className="mb-3 list-disc space-y-1 pl-5">
              {result.warnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}

        <p className="mb-1 font-semibold text-emerald-300">Следующие шаги:</p>
        <ul className="list-disc space-y-1 pl-5">
          {result.nextSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
