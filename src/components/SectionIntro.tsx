type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  headingLevel?: "h1" | "h2";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  headingLevel = "h2",
}: SectionIntroProps) {
  const Heading = headingLevel;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-800">
          {eyebrow}
        </p>
        <Heading className="mt-4 max-w-xl font-serif text-4xl leading-tight text-stone-950 sm:text-5xl">
          {title}
        </Heading>
      </div>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-stone-600 lg:justify-self-end">
          {description}
        </p>
      ) : null}
    </div>
  );
}
