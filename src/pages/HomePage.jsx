import HeroContact from "../components/HomePage/HeroContact";
import Hero from "../components/HomePage/Hero";
import Summary from "../components/HomePage/Summary/Summary";
import Services from "../components/HomePage/Services";
import BookAppointmentTestimonials from "../components/HomePage/BookAppointmentTestimonials/BookAppointmentTestimonials";
import Doctors from "../components/HomePage/Doctors";
import Milestone from "../components/HomePage/Milestone";
// import About from "./components/HomePage/About";

const HomePage = () => {
  return (
    <>
      <HeroContact />
      <Hero />
      <Summary />
      <Services />
      <BookAppointmentTestimonials />
      <Doctors />
      <Milestone />
      {/* <About /> */}
    </>
  );
};

export default HomePage;
