import { Outlet } from "react-router-dom";

import Navigation from "../components/Home/Navigation/Navigation";
import Footer from "../components/Home/Footer";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
