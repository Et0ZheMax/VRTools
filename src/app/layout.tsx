import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Viking Rise Tools — Calculators, Heroes and Guides",
  description:
    "Useful fan-made tools for Viking Rise players: resource calculator, speedup calculator, farm planner, heroes database and guides.",
  openGraph: {
    title: "Viking Rise Tools — Calculators, Heroes and Guides",
    description:
      "Useful fan-made tools for Viking Rise players: resource calculator, speedup calculator, farm planner, heroes database and guides.",
    siteName: "Viking Rise Tools",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="mx-auto min-h-[calc(100vh-170px)] max-w-6xl px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
