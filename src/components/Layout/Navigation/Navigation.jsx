import logo from "../../../assets/logo.jpg";
import hamburgerMenu from "../../../assets/hamburger-menu.svg";

const Navigation = () => {
  return (
    <div className="flex items-center justify-between px-6 h-20 text-[#555] xl:justify-center lg:h-32 xl:h-28">
      <div className="flex items-center h-full lg:border-r lg:pr-7">
        <img className="w-16 lg:w-[92px]" src={logo} alt="Logo" />
      </div>
      <nav className="hidden justify-center items-center h-full pr-7 pt-10 pb-4 lg:flex lg:flex-col xl:flex-row xl:pt-0 xl:pb-0">
        <ul className="flex items-center space-x-8 px-7 h-full uppercase xl:space-x-12">
          <li className="transition hover:text-[#f97729]">
            <a href="/">Home</a>
          </li>
          <li className="transition hover:text-[#f97729]">
            <a href="/">About Us</a>
          </li>
          <li className="transition hover:text-[#f97729]">
            <a href="/">Shop</a>
          </li>
          <li className="transition hover:text-[#f97729]">
            <a href="/">News & Updates</a>
          </li>
          <li className="transition hover:text-[#f97729]">
            <a href="/">Contact</a>
          </li>
        </ul>
        <a
          className="inline-block mt-6 px-5 py-3 text-[#f97729] text-sm uppercase font-bold border-2 border-[#f97729] rounded-full transition-all hover:text-white hover:bg-[#f97729] xl:mt-0"
          href="/"
        >
          Book Appointment
        </a>
      </nav>
      <div className="hidden items-center pl-7 border-l h-full lg:flex xl:pl-7">
        <input className="outline-none" type="text" placeholder="Search" />
      </div>
      <button className="lg:hidden">
        <img src={hamburgerMenu} alt="Hamburger Menu" />
      </button>
    </div>
  );
};

export default Navigation;
