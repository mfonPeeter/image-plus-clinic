import larrIcon from "../../assets/hero/larr.svg";
import rarrIcon from "../../assets/hero/rarr.svg";

const HeroSection = () => {
  return (
    <header className="relative flex justify-center bg-heroBg-sm-1 bg-cover bg-no-repeat bg-top mb-16 md:justify-end md:mb-20 md:bg-heroBg-1g-1">
      <div className="py-32 px-16 text-white md:py-56">
        <div className="text-center">
          <h2 className="mb-3 font-bold text-3xl sm:text-4xl md:text-[55px]">
            We Are ImagePlus Clinic
          </h2>
          <p className="mb-10 text-xl italic sm:text-2xl md:text-3xl">
            Your Total Eye Care Practitioners
          </p>
        </div>
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0 md:justify-center">
          <button className="py-5 px-4 uppercase font-semibold bg-[rgba(0,0,0,0.36)] rounded transition-all hover:bg-black sm:px-10">
            Meet Our Doctors
          </button>
          <button className="py-5 px-4 uppercase font-semibold bg-[rgba(0,0,0,0.36)] rounded transition-all hover:bg-black sm:px-10">
            Schedule Appointment
          </button>
        </div>
      </div>
      <button className="absolute top-1/2 left-0 -translate-y-1/2 md:left-4">
        <img
          className="w-12 h-12 md:w-14 md:h-14"
          src={larrIcon}
          alt="Left Arrow"
        />
      </button>
      <button className="absolute top-1/2 right-0 -translate-y-1/2 md:right-4">
        <img
          className="w-12 h-12 md:w-14 md:h-14"
          src={rarrIcon}
          alt="Right Arrow"
        />
      </button>
    </header>
  );
};

export default HeroSection;
