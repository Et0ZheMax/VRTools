import type { Metadata } from "next";
import { SpeedupCalculator } from "@/components/tools/SpeedupCalculator";

export const metadata: Metadata = {
  title: "Speedup Calculator | Viking Rise Tools",
  description: "Count all speedups and compare with required time."
};

export default function SpeedupsPage(): JSX.Element {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold text-accent">Speedup Calculator</h1>
      <SpeedupCalculator />
    </div>
  );
}
