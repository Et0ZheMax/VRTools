import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Tools | Viking Rise Tools",
  description: "Resource, speedup, farm and planner tools for Viking Rise players."
};

const tools = [
  {
    href: "/tools/resources",
    title: "Resource Calculator",
    description: "Сравнить текущие и требуемые ресурсы.",
    status: "Available"
  },
  {
    href: "/tools/speedups",
    title: "Speedup Calculator",
    description: "Посчитать общий объём ускорений и дефицит.",
    status: "Available"
  },
  {
    href: "/tools/farm",
    title: "Farm Calculator",
    description: "Оценить эффективность ферм и доход за период.",
    status: "Beta"
  },
  {
    href: "/tools/planner",
    title: "Development Planner",
    description: "Rule-based рекомендации для прогресса аккаунта.",
    status: "Beta"
  },
  {
    href: "/heroes",
    title: "Heroes Database",
    description: "База героев (sample data).",
    status: "Available"
  },
  {
    href: "/guides",
    title: "Guides",
    description: "Карточки будущих гайдов и SEO-страниц.",
    status: "Soon"
  }
] as const;

export default function ToolsPage(): JSX.Element {
  return (
    <div>
      <h1 className="mb-5 text-3xl font-bold text-accent">All Tools</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <Card key={tool.href}>
            <div className="mb-2 flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">{tool.title}</h2>
              <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-300">{tool.status}</span>
            </div>
            <p className="mb-3 text-sm text-slate-300">{tool.description}</p>
            <Link href={tool.href} className="rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-black hover:bg-amber-400">
              Open
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
