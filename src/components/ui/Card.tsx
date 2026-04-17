import { type ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export const Card = ({ title, children, className = "" }: CardProps): JSX.Element => {
  return (
    <section className={`rounded-2xl border border-slate-800 bg-panel/95 p-5 shadow-card ${className}`}>
      {title ? <h3 className="mb-3 text-lg font-semibold text-accent">{title}</h3> : null}
      {children}
    </section>
  );
};
