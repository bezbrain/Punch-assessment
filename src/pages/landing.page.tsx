import { Carousel } from "../components/carousel";
import { Faq } from "../components/faq";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { HowItWorked } from "../components/howItWorked";
import { HowWeEnsure } from "../components/howWeEnsure";
import { NavBar } from "../components/navBar";
import { StartJourney } from "../components/startJourney";
import { YourOneStop } from "../components/yourOneStop";

const LandingPage = () => {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <Hero />
      <YourOneStop />
      <HowItWorked />
      <HowWeEnsure />
      <StartJourney />
      <Carousel />
      <Faq />
      <Footer />
    </main>
  );
};

export default LandingPage;
