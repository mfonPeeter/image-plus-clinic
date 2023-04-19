import starIcon from "../../../assets/star.svg";
import larrIcon from "../../../assets/testimonials/larr.svg";
import rarrIcon from "../../../assets/testimonials/rarr.svg";

const Testimonials = () => {
  return (
    <div className="w-full pt-6 md:w-1/2">
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-center text-3xl text-[#333] font-bold uppercase md:text-4xl">
          Testimonials
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>

      <div className="mb-24 px-7 md:px-0">
        <div className="flex justify-center space-x-1 mb-2">
          <img
            className="w-4 h-4 md:w-6 md:h-6"
            src={starIcon}
            alt="Five Stars"
          />
          <img
            className="w-4 h-4 md:w-6 md:h-6"
            src={starIcon}
            alt="Five Stars"
          />
          <img
            className="w-4 h-4 md:w-6 md:h-6"
            src={starIcon}
            alt="Five Stars"
          />
          <img
            className="w-4 h-4 md:w-6 md:h-6"
            src={starIcon}
            alt="Five Stars"
          />
          <img
            className="w-4 h-4 md:w-6 md:h-6"
            src={starIcon}
            alt="Five Stars"
          />
        </div>
        <div className="relative px-10 text-center md:px-4">
          <p className="mb-8 text-lg">
            I was completely satisfied with my experience at Imageplus. The
            Staff and Doctors were not just kind but also professional. Thank
            you so much for saving my vision.
          </p>
          <p>Kingsley Anyway</p>
          <button className="absolute top-1/2 left-0 -translate-y-1/2 md:-left-4">
            <img className="w-6 h-6" src={larrIcon} alt="Left Arrow" />
          </button>
          <button className="absolute top-1/2 right-0 -translate-y-1/2 md:-right-4">
            <img className="w-6 h-6" src={rarrIcon} alt="Right Arrow" />
          </button>
        </div>
      </div>

      <a
        className="flex justify-center text-2xl underline"
        href="/testimonials"
      >
        View More Testimonials
      </a>
    </div>
  );
};

export default Testimonials;
