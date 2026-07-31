import { trustBadges } from '@/mocks/homepage';

export default function TrustBar() {
  return (
    <section className="py-8 md:py-10 border-y border-orbit-border bg-white/60 backdrop-blur-sm">
      <div className="max-w-orbit mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 text-orbit-text-muted"
            >
              <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-orbit-primary">
                <i className={`${badge.icon} text-lg md:text-xl`} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs md:text-sm font-semibold text-orbit-text leading-tight">
                  {badge.label}
                </span>
                <span className="text-[10px] md:text-xs text-orbit-text-dim leading-tight">
                  {badge.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
