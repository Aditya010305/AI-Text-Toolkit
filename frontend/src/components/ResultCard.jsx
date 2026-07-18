const accentMap = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  red: "bg-red-50 text-red-600",
  gray: "bg-gray-100 text-gray-600",
  purple: "bg-purple-50 text-purple-600",
};

function ResultCard({ icon: Icon, title, accent = "blue", children }) {
  return (
    <div role="region" aria-label={title} className="w-full mt-6 p-6 rounded-xl bg-white shadow-md border border-gray-100 animate-slide-up">
      <div className="flex items-center gap-3 mb-5">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${accentMap[accent]}`}>
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default ResultCard;