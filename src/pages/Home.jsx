import HomeSection from "../components/HomeSection";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Advantages from "../components/Advantages";
import WorkWithUs from "../components/WorkWithUs";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout title="Home">
      <HomeSection />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <WorkWithUs />
      <Clients />
      <CTA />
    </Layout>
  );
};

export default Home;
