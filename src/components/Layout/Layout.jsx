import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
