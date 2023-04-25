import { Outlet } from "react-router-dom";

import Navigation from "../components/Home/Navigation/Navigation";
import Footer from "../components/Home/Footer";
import WhatsApp from "../components/WhatsApp/WhatsApp";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
};

export default RootLayout;
