import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ServicesContentPage from "./pages/ServicesContent";
import DoctorsContentPage from "./pages/DoctorsContent";

// Fonts
import "./fonts/Providence.ttf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "services/:serviceId",
        element: <ServicesContentPage />,
      },
      {
        path: "doctors/:doctorId",
        element: <DoctorsContentPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
