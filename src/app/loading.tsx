export default function Loading() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-orbit-bg"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-2 border-orbit-primary/20 border-t-orbit-primary animate-spin" />
        <span className="text-sm font-semibold text-orbit-text">
          Loading Orbitpark
        </span>
      </div>
    </div>
  );
}
