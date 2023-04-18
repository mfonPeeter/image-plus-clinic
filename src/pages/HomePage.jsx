import HeroContact from "../components/HomePage/HeroContact";
import Hero from "../components/HomePage/Hero";
import Summary from "../components/HomePage/Summary/Summary";
import Services from "../components/HomePage/Services";
import Others from "../components/HomePage/Others";
import BookAppointmentTestimonials from "../components/HomePage/BookAppointmentTestimonials/BookAppointmentTestimonials";
import Doctors from "../components/HomePage/Doctors";
import Partners from "../components/HomePage/Partners";
import Milestone from "../components/HomePage/Milestone";
// import About from "./components/HomePage/About";

const HomePage = () => {
  return (
    <>
      <HeroContact />
      <Hero />
      <Summary />
      <Services />
      <Others />
      <BookAppointmentTestimonials />
      <Doctors />
      <Partners />
      <Milestone />
      {/* <About /> */}
    </>
  );
};

export default HomePage;
