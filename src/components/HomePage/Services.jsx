const Services = () => {
  return (
    <section className="mb-16 pt-10 pb-14 text-white bg-[#2f2f2f] md:px-20 lg:px-16 xl:px-28">
      <div className="flex flex-col items-center mb-12">
        <h2 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
          Our Services
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="text-center py-6 pr-4  border-b md:border-r">
          <h2 className="mb-1 text-xl md:text-2xl">Low Vision Clinic</h2>
          <p className="text-sm mb-3 md:text-base">
            We create a world without limits by improving the vision for
            near-blind patients.
          </p>
          <a
            href="/"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#4b5255]"
          >
            Read more
          </a>
        </div>
        <div className="text-center py-6 px-4 w-full border-b md:border-r">
          <h2 className="mb-1 text-xl md:text-2xl">
            Geriatric & Pedriatic Care
          </h2>
          <p className="text-sm mb-3 md:text-base">
            Specialized eye care services for aged clients and also children.
          </p>
          <a
            href="/"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#4b5255]"
          >
            Read more
          </a>
        </div>
        <div className="text-center py-6 pl-4 border-b lg:px-4 lg:border-r">
          <h2 className="mb-1 text-xl md:text-2xl">Vision Screening</h2>
          <p className="text-sm mb-3 md:text-base">
            We provide vision screening services to individuals and corporate
            organizations.
          </p>
          <a
            href="/"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#4b5255]"
          >
            Read more
          </a>
        </div>
        <div className="text-center py-6 pr-4 border-b md:border-r lg:pr-0 lg:pl-4 lg:border-r-0">
          <h2 className="mb-1 text-xl md:text-2xl">Diagnostic Testing</h2>
          <p className="text-sm mb-3 md:text-base">
            We utilize computerized diagnostic equipment in the management of
            our patients.
          </p>
          <a
            href="/"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#4b5255]"
          >
            Read more
          </a>
        </div>
        <div className="text-center py-6 px-4 border-b md:border-r lg:px-0 lg:pr-4 lg:border-b-0">
          <h2 className="mb-1 text-xl md:text-2xl">Optical Services</h2>
          <p className="text-sm mb-3 md:text-base">
            We offer a wide range of Optical services including single vision,
            bifocal and varifocal lenses.
          </p>
          <a
            href="/"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#4b5255]"
          >
            Read more
          </a>
        </div>
        <div className="text-center py-6 pl-4 border-b lg:px-4 lg:border-b-0 lg:border-r">
          <h2 className="mb-1 text-xl md:text-2xl">Contact Lenses</h2>
          <p className="text-sm mb-3 md:text-base">
            Count on our knowledge and expertise to find the contact lenses
            perfect for your needs.
          </p>
          <a
            href="/"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#4b5255]"
          >
            Read more
          </a>
        </div>
        <div className="text-center py-6 pr-4 border-b md:border-r md:border-b-0 lg:px-4">
          <h2 className="mb-1 text-xl md:text-2xl">The Outdoor Clinic</h2>
          <p className="text-sm mb-3 md:text-base">
            High quality and professional service you can trust, in the comfort
            of your home.
          </p>
          <a
            href="/"
            className="inline-block py-3 px-4 text-xs uppercase border-2 border-white rounded-full transition-colors hover:bg-[#4b5255]"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
