type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === 'center'
          ? 'mx-auto mb-12 max-w-3xl text-center md:mb-16'
          : 'mb-10 max-w-3xl'
      }
    >
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-normal text-orbit-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-normal text-orbit-text md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-orbit-text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
