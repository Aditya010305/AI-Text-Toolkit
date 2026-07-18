function SkeletonLoader({ lines = 3 }) {
  return (
    <div className="w-full mt-6 p-6 rounded-xl bg-white shadow-md border border-gray-100" aria-hidden="true">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg bg-gray-100 animate-pulse" />
        <div className="h-3 w-32 rounded bg-gray-100 animate-pulse" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="h-3 rounded bg-gray-100 animate-pulse" style={{ width: `${100 - i * 15}%` }} />
        ))}
      </div>
    </div>
  );
}

export default SkeletonLoader;