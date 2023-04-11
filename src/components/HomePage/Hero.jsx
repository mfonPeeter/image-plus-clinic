// import slider-1 from '../../assets/sliders/slider-1.jpg';
// import slider-2 from '../../assets/sliders/slider-2.jpg';
// import slider-3 from '../../assets/sliders/slider-3.jpg';

const HeroSection = () => {
  return (
    <header className="flex justify-center bg-hero-bg-1 bg-cover bg-center bg-no-repeat mb-16 md:justify-end md:mb-20">
      <div className="py-56 px-16 text-white">
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
