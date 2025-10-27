import HomeSection from "../components/HomeSection";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Advantages from "../components/Advantages";
import WorkWithUs from "../components/WorkWithUs";
import Clients from "../components/Clients";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      <HomeSection />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <WorkWithUs />
      <Clients />
      <CTA />
    </div>
  );
};

export default Home;
