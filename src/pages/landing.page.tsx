import { Hero } from "../components/hero";
import { HowItWorked } from "../components/howItWorked";
import { NavBar } from "../components/navBar";
import { YourOneStop } from "../components/yourOneStop";

const LandingPage = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <YourOneStop />
      <HowItWorked />
    </main>
  );
};

export default LandingPage;
