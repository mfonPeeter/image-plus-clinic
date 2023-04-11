import Layout from "./components/Layout/Layout";
import HeroContact from "./components/HomePage/HeroContact";
import Hero from "./components/HomePage/Hero";
import Summary from "./components/HomePage/Summary/Summary";
import Services from "./components/HomePage/Services";
// import About from "./components/HomePage/About";

// Fonts
import "./fonts/Providence.ttf";

const App = () => {
  return (
    <Layout>
      <HeroContact />
      <Hero />
      <Summary />
      <Services />
      {/* <About /> */}
    </Layout>
  );
};

export default App;
