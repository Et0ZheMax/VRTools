import type { Metadata } from "next";
import { FarmCalculator } from "@/components/tools/FarmCalculator";

export const metadata: Metadata = {
  title: "Farm Calculator | Viking Rise Tools",
  description: "Estimate farm income by resource and time period."
};

export default function FarmPage(): JSX.Element {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold text-accent">Farm Calculator</h1>
      <FarmCalculator />
    </div>
  );
}
