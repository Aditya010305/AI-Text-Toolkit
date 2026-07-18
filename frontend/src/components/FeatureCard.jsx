import { Link } from "react-router-dom";
import { SentimentIcon, TranslationIcon, SummaryIcon, QAIcon, ZeroShotIcon, ArrowRightIcon } from "./icons/Icons";

const ICON_MAP = {
  sentiment: SentimentIcon,
  translation: TranslationIcon,
  summary: SummaryIcon,
  qa: QAIcon,
  zeroshot: ZeroShotIcon,
};

function FeatureCard({ title, description, path, icon }) {
  const Icon = ICON_MAP[icon];

  return (
    <Link
      to={path}
      aria-label={`Open ${title} tool`}
      className="group relative p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-100 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Try Now <ArrowRightIcon className="w-4 h-4" />
      </span>
    </Link>
  );
}

export default FeatureCard;