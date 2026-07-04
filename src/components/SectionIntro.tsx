type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionIntro({ eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-stone-600 lg:justify-self-end">
          {description}
        </p>
      ) : null}
    </div>
  );
}
