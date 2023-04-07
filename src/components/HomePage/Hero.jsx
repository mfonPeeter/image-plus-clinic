// import heroImg1 from "../../assets/hero-img-1.jpeg";
// import heroImg2 from "../../assets/hero-img-2.jpg";
// import heroImg3 from "../../assets/hero-img-3.jpg";

const HeroSection = () => {
  return (
    <header className="flex justify-end items-end bg-hero-bg-1 bg-cover bg-no-repeat mb-16">
      <div className="py-44 px-16 text-white">
        <div>
          <h2 className="mb-3 text-[55px] font-bold">
            We Are ImagePlus Clinic
          </h2>
          <p className="mb-10 text-3xl italic">Your Total Eye Care Doctors</p>
        </div>
        <div className="flex space-x-6">
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
