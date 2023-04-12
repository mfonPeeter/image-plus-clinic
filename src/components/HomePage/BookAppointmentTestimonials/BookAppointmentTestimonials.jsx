import BookAppointment from "./BookAppointment";
import Testimonials from "./Testimonials";

const BookAppointmentTestimonials = () => {
  return (
    <section className="flex flex-col space-y-2 mb-16 py-16 bg-[#efefef] md:flex-row md:items-start md:justify-between md:space-x-6 md:space-y-0 md:px-6 lg:space-x-10 lg:px-8 xl:px-28">
      <BookAppointment />
      <Testimonials />
    </section>
  );
};

export default BookAppointmentTestimonials;
