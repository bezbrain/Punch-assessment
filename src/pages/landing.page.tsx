import { Hero } from "../components/hero";
import { NavBar } from "../components/navBar";
import { YourOneStop } from "../components/yourOneStop";

const LandingPage = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <YourOneStop />
      <p>Hello</p>
    </main>
  );
};

export default LandingPage;
