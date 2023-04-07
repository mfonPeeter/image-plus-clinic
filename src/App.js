import Layout from "./components/Layout/Layout";
import HeroContact from "./components/HomePage/HeroContact";
import Hero from "./components/HomePage/Hero";
import About from "./components/HomePage/About";

const App = () => {
  return (
    <Layout>
      <HeroContact />
      <Hero />
      <About />
    </Layout>
  );
};

export default App;
