import type { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  meta?: string;
};

export function TextArea({ label, meta, className = "", ...props }: TextAreaProps) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between gap-3 sm:mb-3 sm:gap-4">
        <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">{label}</span>
        {meta ? (
          <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400 sm:px-3 sm:py-1 sm:text-xs">
            {meta}
          </span>
        ) : null}
      </div>
      <textarea
        className={`min-h-[160px] w-full resize-y rounded-xl border border-slate-200/80 bg-white/90 p-3 text-sm leading-relaxed text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:shadow-md focus:shadow-brand-500/10 focus:ring-4 focus:ring-brand-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand-500/50 dark:focus:shadow-brand-500/5 dark:focus:ring-brand-500/10 sm:min-h-[220px] sm:rounded-2xl sm:p-4 ${className}`}
        {...props}
      />
    </label>
  );
}
