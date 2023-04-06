import heroImg1 from "../../assets/hero-img-1.jpeg";
import heroImg2 from "../../assets/hero-img-2.jpg";
import heroImg3 from "../../assets/hero-img-3.jpg";

const HeroSection = () => {
  return (
    <header className="flex py-24 pb-96 px-16 bg-[#f97729] text-white">
      <div className="w-1/2 border border-black">
        <h1>Eyes are precious & sensitive</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde
          accusantium saepe laboriosam mollitia corrupti, consectetur ipsum
          magnam temporibus eveniet asperiores nihil velit cumque repellendus,
          dolore minima quaerat esse nobis.
        </p>
      </div>
      <div className="relative w-1/2">
        <div className="">
          <img
            className="absolute left-2 -top-8 w-1/2 shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            src={heroImg1}
            alt="Hero 1"
          />
        </div>
        <div>
          <img
            className="absolute right-12 top-5 w-1/2"
            src={heroImg2}
            alt="Hero 2"
          />
        </div>
        <div>
          <img
            className="absolute left-[20%] top-32 w-1/2"
            src={heroImg3}
            alt="Hero 3"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
