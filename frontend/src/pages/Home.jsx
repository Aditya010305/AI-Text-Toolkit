import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import TechStack from "../components/TechStack";
import HowItWorks from "../components/HowItWorks";
import WhyProject from "../components/WhyProject";
import ModelsUsed from "../components/ModelsUsed";
import { TOOLS } from "../utils/constants";

function Home() {
  return (
    <div>
      <Hero />

      <section id="features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 scroll-mt-24 animate-slide-up">
        {TOOLS.map((tool) => (
          <FeatureCard key={tool.path} {...tool} />
        ))}
      </section>

      <TechStack />
      <ModelsUsed />
      <HowItWorks />
      <WhyProject />
    </div>
  );
}

export default Home;