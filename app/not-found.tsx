import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <div className="rounded-2xl border border-white/50 bg-white/65 p-10 shadow-panel backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-accent-500 text-2xl font-bold text-white shadow-lg shadow-brand-500/25">
          404
        </div>
        <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
          Tool not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
          The requested tool route is not registered yet. Head back to the homepage to explore the current tool library.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-xl"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
