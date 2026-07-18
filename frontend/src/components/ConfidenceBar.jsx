function ConfidenceBar({ value, colorClass = "bg-blue-600", label = "Confidence" }) {
  const clamped = Math.min(Math.max(value, 0), 100);
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="w-full h-2 rounded-full bg-gray-100 overflow-hidden"
    >
      <div
        className={`h-full rounded-full ${colorClass} transition-all duration-700 ease-out`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export default ConfidenceBar;