import Layout from "./components/Layout/Layout";
import HeroContact from "./components/HomePage/HeroContact";
import Hero from "./components/HomePage/Hero";
import About from "./components/HomePage/About";
import Services from "./components/HomePage/Services";

const App = () => {
  return (
    <Layout>
      <HeroContact />
      <Hero />
      <About />
      <Services />
    </Layout>
  );
};

export default App;
