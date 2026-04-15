import type { Metadata } from "next";
import { ResourceCalculator } from "@/components/tools/ResourceCalculator";

export const metadata: Metadata = {
  title: "Resource Calculator | Viking Rise Tools",
  description: "Calculate missing and excess resources and overall progress percentage."
};

export default function ResourcesPage(): JSX.Element {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold text-accent">Resource Calculator</h1>
      <ResourceCalculator />
    </div>
  );
}
