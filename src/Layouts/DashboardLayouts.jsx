import { Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashboardLayouts = () => {
    const [isAdmin] = useAdmin();
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 flex">
      <div className="w-64 min-h-screen bg-orange-600">
        {
            isAdmin ? <div><p>hi admin successfully</p></div> : <div><p>hi student</p></div>
        }
      </div>

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayouts;
