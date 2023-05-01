import { Outlet, useLocation } from "react-router-dom";

import Navigation from "../components/Home/Navigation/Navigation";
import Footer from "../components/Home/Footer";
import WhatsApp from "../components/WhatsApp/WhatsApp";

const RootLayout = () => {
  const location = useLocation();

  console.log(location);

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      {location.pathname !== "/login" && <Footer />}
      {location.pathname !== "/login" && <WhatsApp />}
    </>
  );
};

export default RootLayout;
