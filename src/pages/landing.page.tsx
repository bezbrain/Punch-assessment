import { Hero } from "../components/hero";
import { HowItWorked } from "../components/howItWorked";
import { HowWeEnsure } from "../components/howWeEnsure";
import { NavBar } from "../components/navBar";
import { YourOneStop } from "../components/yourOneStop";

const LandingPage = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <YourOneStop />
      <HowItWorked />
      <HowWeEnsure />
    </main>
  );
};

export default LandingPage;
