import Link from "next/link";
import { ArrowRight, Compass, Hammer, ShieldCheck, Timer } from "lucide-react";
import { Card } from "@/components/ui/Card";

const tools = [
  { href: "/tools/resources", title: "Resource Calculator", icon: Hammer },
  { href: "/tools/speedups", title: "Speedup Calculator", icon: Timer },
  { href: "/tools/farm", title: "Farm Calculator", icon: Compass },
  { href: "/tools/planner", title: "Development Planner", icon: ShieldCheck },
  { href: "/heroes", title: "Heroes Database", icon: ShieldCheck }
];

export default function HomePage(): JSX.Element {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-br from-panel to-slate-900 p-6 shadow-card md:p-10">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-steel">Fan-Made Toolkit</p>
        <h1 className="text-3xl font-bold leading-tight text-accent md:text-5xl">Viking Rise Tools</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-300 md:text-lg">
          Сервис инструментов для расчётов, планирования и развития аккаунта.
        </p>
        <Link
          href="/tools"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-3 font-semibold text-black hover:bg-amber-400 active:translate-y-px"
        >
          Открыть инструменты <ArrowRight size={18} />
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Инструменты</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ href, title, icon: Icon }) => (
            <Card key={href}>
              <Icon className="mb-3 text-accent" />
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <Link href={href} className="text-sm text-accent hover:text-amber-400">
                Перейти →
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card title="Почему это полезно">
          <ul className="list-disc space-y-1 pl-5 text-slate-300">
            <li>Быстрые расчёты без таблиц и ручной математики.</li>
            <li>Планирование ускорений и фарма за пару кликов.</li>
            <li>Подготовка к будущим обновлениям (Telegram Mini App, аккаунт).</li>
          </ul>
        </Card>
        <Card title="Для кого">
          <ul className="list-disc space-y-1 pl-5 text-slate-300">
            <li>Новички, которые хотят избежать ошибок развития.</li>
            <li>Активные игроки, следящие за эффективностью.</li>
            <li>Лидеры альянсов и организаторы событий.</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
