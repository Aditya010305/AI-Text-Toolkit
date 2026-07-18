import { InputIcon, ModelIcon, PredictionIcon, ResultIcon, ArrowRightIcon } from "./icons/Icons";

const STEPS = [
  { label: "Input Text", Icon: InputIcon },
  { label: "AI Model", Icon: ModelIcon },
  { label: "Prediction", Icon: PredictionIcon },
  { label: "Result", Icon: ResultIcon },
];

function HowItWorks() {
  return (
    <section className="py-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        How It Works
      </h2>
      <p className="text-center text-gray-500 mb-14">
        A simple four-step pipeline from input to result
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
        {STEPS.map((step, index) => (
          <div key={step.label} className="flex items-center gap-2 md:gap-4">
            <div className="flex flex-col items-center gap-3 px-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-300">
                <step.Icon className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {step.label}
              </span>
            </div>
            {index < STEPS.length - 1 && (
              <ArrowRightIcon className="w-5 h-5 text-gray-300 rotate-90 md:rotate-0 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;