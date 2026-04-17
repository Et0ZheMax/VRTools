export const Footer = (): JSX.Element => {
  return (
    <footer className="mt-14 border-t border-slate-800 bg-panel/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Viking Rise Tools.</p>
        <p>Fan-made project. Not affiliated with Viking Rise or its publishers.</p>
      </div>
    </footer>
  );
};
