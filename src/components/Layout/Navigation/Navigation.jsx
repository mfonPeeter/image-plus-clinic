import logo from "../../../assets/logo.jpg";

const Navigation = () => {
  return (
    <div className="flex items-center justify-center h-28">
      <div className="pr-7 border-r h-full">
        <img className="w-[92px]" src={logo} alt="Logo" />
      </div>
      <nav className="flex items-center h-full">
        <ul className="flex items-center space-x-12 px-7 h-full text-sm uppercase font-semibold border-r">
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
          <li>
            <a
              className="px-6 py-4 text-[#f97729] text-[13px] font-bold border-2 border-[#f97729] rounded-full transition-all hover:text-white hover:bg-[#f97729]"
              href="/"
            >
              Book Appointment
            </a>
          </li>
        </ul>
        <div className="pl-7">
          <input className="outline-none" type="text" placeholder="Search" />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
