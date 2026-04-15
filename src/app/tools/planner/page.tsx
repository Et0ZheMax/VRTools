import type { Metadata } from "next";
import { DevelopmentPlanner } from "@/components/tools/DevelopmentPlanner";

export const metadata: Metadata = {
  title: "Development Planner | Viking Rise Tools",
  description: "Rule-based progression recommendations for Viking Rise account growth."
};

export default function PlannerPage(): JSX.Element {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold text-accent">Development Planner</h1>
      <DevelopmentPlanner />
    </div>
  );
}
