import { GithubIcon } from "./icons/Icons";

function Hero() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden py-28 px-4 text-center">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-1/4 w-72 h-72 bg-blue-200/50 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl animate-blob animation-delay-4000" />

        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 30%, black, transparent)",
          }}
        />
      </div>

      <div className="animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          Powered by Hugging Face Transformers &amp; FastAPI
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.1]">
          AI Text Toolkit
        </h1>

        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-11 leading-relaxed">
          Five NLP tools in one place — sentiment analysis, translation,
          summarization, question answering, and zero-shot classification.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToFeatures}
            aria-label="Scroll to available tools"
            className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Get Started
          </button>

          <a
            href="https://github.com/Aditya010305/AI-Text-Toolkit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View project on GitHub"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium hover:border-gray-300 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <GithubIcon className="w-5 h-5" />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;