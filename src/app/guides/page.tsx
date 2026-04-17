import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Guides | Viking Rise Tools",
  description: "Planned guides for new and advanced Viking Rise players."
};

export default function GuidesPage(): JSX.Element {
  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold text-accent">Guides</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <Card key={guide.slug}>
            <h2 className="mb-1 text-lg font-semibold">{guide.title}</h2>
            <p className="text-sm text-slate-300">Status: {guide.status}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
