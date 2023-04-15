import firstDoctorImg from "../../assets/doctors/doctor-1.jpg";
import secondDoctorImg from "../../assets/doctors/doctor-2.jpg";

const Doctors = () => {
  return (
    <section className="py-16 px-6 bg-[#2f2f2f] text-white sm:px-12 md:px-20 lg:px-16 xl:px-28">
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-center text-3xl font-bold uppercase md:text-4xl">
          Meet Our Doctors
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>
      <div className="mb-12">
        <p className="text-xl">
          Our eye doctors are well experienced and highly qualified. The
          positive reviews speak as to the level of professionalism we render to
          our patients. So if you are looking for a reliable eye clinic in
          Lagos, we are always at your service. Book an appointment by{" "}
          <a className="underline" href="tel:+2349071259643">
            phone
          </a>{" "}
          or{" "}
          <a className="underline" href="#book-appointment">
            online.
          </a>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-8 md:space-y-0 lg:justify-around">
        <div className="shadow-2xl">
          <img
            className="w-[370px] h-[280px] rounded-t"
            src={firstDoctorImg}
            alt="Dr Ijeoma"
          />
          <div className="py-2 text-center bg-[#f97729]">
            <h3 className="text-lg lg:text-xl">Dr (Lady) Ijeoma Nnabuife</h3>
            <p className="text-sm lg:text-base">Frontline Optometrist</p>
          </div>
          <div className="flex flex-col pt-4 bg-white rounded-b">
            <div className="mb-4 px-8 text-[#555] text-sm lg:text-base">
              <div className="flex justify-between border-b pb-2">
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div className="flex justify-between pt-2">
                <p>Saturday</p>
                <p>10:00 AM - 3:00 PM</p>
              </div>
            </div>
            <a
              className="inline-block mb-6 self-center px-6 py-3 text-[#f97729] text-sm uppercase font-bold border-2 border-[#f97729] rounded-full transition-all hover:text-white hover:bg-[#f97729] lg:px-8 lg:text-base"
              href="/doctor"
            >
              Read Profile
            </a>
          </div>
        </div>

        <div className="shadow-2xl">
          <img
            className="w-[370px] h-[280px] rounded-t"
            src={secondDoctorImg}
            alt="Dr Ijeoma"
          />
          <div className="py-2 text-center bg-[#f97729]">
            <h3 className="text-lg lg:text-xl">Dr (Lady) Ijeoma Nnabuife</h3>
            <p className="text-sm lg:text-base">Frontline Optometrist</p>
          </div>
          <div className="flex flex-col pt-4 bg-white rounded-b">
            <div className="mb-4 px-8 text-[#555] text-sm lg:text-base">
              <div className="flex justify-between border-b pb-2">
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div className="flex justify-between pt-2">
                <p>Saturday</p>
                <p>10:00 AM - 3:00 PM</p>
              </div>
            </div>
            <a
              className="inline-block mb-6 self-center px-6 py-3 text-[#f97729] text-sm uppercase font-bold border-2 border-[#f97729] rounded-full transition-all hover:text-white hover:bg-[#f97729] lg:px-8 lg:text-base"
              href="/doctor"
            >
              Read Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
