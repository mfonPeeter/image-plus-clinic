import ubaLogo from "../../assets/partners/uba-logo.png";
import keystoneLogo from "../../assets/partners/keystone-logo.png";
import moniepointLogo from "../../assets/partners/moniepoint-logo.png";

const Partners = () => {
  return (
    <section className="pt-10 pb-4 px-6 bg-[#efefef] text-white sm:px-12 md:px-20 lg:px-16 xl:px-28">
      <div className="flex flex-col items-center mb-2">
        <h2 className="mb-3 text-center text-3xl text-[#333] font-bold uppercase md:text-4xl">
          Our Partners
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>
      <div className="flex justify-center space-x-1 sm:space-x-10">
        <img src={ubaLogo} alt="UBA Logo" />
        <img src={keystoneLogo} alt="Keystone Logo" />
        <img src={moniepointLogo} alt="Moniepoint Logo" />
      </div>
    </section>
  );
};

export default Partners;
