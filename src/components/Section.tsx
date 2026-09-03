import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  number: string;
  label: string;
  children: ReactNode;
};

export default function Section({
  id,
  number,
  label,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 text-ink lg:px-8"
    >
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-[11px] font-bold text-ember">
          {number}
        </span>

        <span className="h-px w-10 bg-ink/15" />

        <span className="text-[11px] font-bold uppercase tracking-[.25em] text-ink/45">
          {label}
        </span>
      </div>

      {children}
    </section>
  );
}