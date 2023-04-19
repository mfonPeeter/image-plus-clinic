import searchIcon from "../../../assets/magnifying-glass.svg";

const MobileNav = ({ showMobileNav, showMobileNavHandler }) => {
  console.log(showMobileNav);
  return (
    <>
      <div
        className={`fixed z-30 top-0 right-0 h-screen w-full bg-[rgba(0,0,0,0.4)] duration-700 transition-all lg:hidden ${
          showMobileNav
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
        onClick={showMobileNavHandler}
      />
      <nav
        className={`fixed right-0 z-30 h-screen w-3/4 text-lg bg-white border-t-2 duration-500 transition-all lg:hidden ${
          showMobileNav
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        <div className="flex justify-between space-x-2 py-3 border-b">
          <input
            className="outline-none w-full px-6"
            type="text"
            placeholder="Search"
          />
          <button className="px-6">
            <img className="w-8 h-8" src={searchIcon} alt="Search Icon" />
          </button>
        </div>
        <ul className="mb-8">
          <a href="/">
            <li className="py-2 px-6 border-b transition hover:text-[#f97729]">
              Home
            </li>
          </a>
          <a href="/">
            <li className="py-2 px-6 border-b transition hover:text-[#f97729]">
              About us
            </li>
          </a>
          <a href="/">
            <li className="py-2 px-6 border-b transition hover:text-[#f97729]">
              Services
            </li>
          </a>
          <a href="/">
            <li className="py-2 px-6 border-b transition hover:text-[#f97729]">
              News & Updates
            </li>
          </a>
          <a href="/">
            <li className="py-2 px-6 border-b transition hover:text-[#f97729]">
              Contact
            </li>
          </a>
        </ul>

        <div className="flex justify-center">
          <a
            className="inline-block px-4 py-2 text-[#f97729] text-sm uppercase font-bold border-2 border-[#f97729] rounded-full transition-all hover:text-white hover:bg-[#f97729]"
            href="/"
          >
            Book Appointment
          </a>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
