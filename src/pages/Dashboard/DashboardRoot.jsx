import { Outlet } from "react-router-dom";

import DashboardMainNavigation from "../../components/Dashboard/DashboardNavigation/DashboardMainNavigation";
import DashboardSmallNavigation from "../../components/Dashboard/DashboardNavigation/DashboardSmallNavigation";
import DashboardFooter from "../../components/Dashboard/DashboardFooter";

const DashboardRootLayout = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="row-span-5">
        <DashboardMainNavigation />
      </div>
      <div className="col-start-2 col-end-6">
        <DashboardSmallNavigation />
      </div>
      <main className="col-start-2 col-end-6 row-span-4">
        <Outlet />
      </main>
      <div className="col-start-2 col-end-6">
        <DashboardFooter />
      </div>
    </div>
  );
};

export default DashboardRootLayout;
