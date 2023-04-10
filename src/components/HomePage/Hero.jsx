// import heroImg1 from "../../assets/hero-img-1.jpeg";
// import heroImg2 from "../../assets/hero-img-2.jpg";
// import heroImg3 from "../../assets/hero-img-3.jpg";

const HeroSection = () => {
  return (
    <header className="flex justify-center bg-hero-bg-1 bg-cover bg-no-repeat mb-16 md:justify-end">
      <div className="py-44 px-16 text-white">
        <div>
          <h2 className="mb-3 font-bold text-3xl sm:text-4xl md:text-[55px]">
            We Are ImagePlus Clinic
          </h2>
          <p className="mb-10 text-xl italic sm:text-2xl md:text-3xl">
            Your Total Eye Care Doctors
          </p>
        </div>
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0">
          <button className="py-5 px-10 uppercase font-semibold bg-[rgba(0,0,0,0.36)] rounded transition-all hover:bg-black">
            Meet Our Doctors
          </button>
          <button className="py-5 px-10 uppercase font-semibold bg-[rgba(0,0,0,0.36)] rounded transition-all hover:bg-black">
            Schedule Appointment
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
