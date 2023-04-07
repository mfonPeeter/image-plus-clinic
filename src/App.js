import Layout from "./components/Layout/Layout";
import HeroContact from "./components/HomePage/HeroContact";
import Hero from "./components/HomePage/Hero";

const App = () => {
  return (
    <Layout>
      <HeroContact />
      <Hero />
    </Layout>
  );
};

export default App;
