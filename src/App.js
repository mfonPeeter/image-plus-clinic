import Layout from "./components/Layout/Layout";
import HeroContact from "./components/HomePage/HeroContact";
import Hero from "./components/HomePage/Hero";
import Summary from "./components/HomePage/Summary/Summary";
// import About from "./components/HomePage/About";
// import Services from "./components/HomePage/Services";

// Fonts
import "./fonts/Providence.ttf";

const App = () => {
  return (
    <Layout>
      <HeroContact />
      <Hero />
      <Summary />
      {/* <About /> */}
      {/* <Services /> */}
    </Layout>
  );
};

export default App;
