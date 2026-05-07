import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
// import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-container">
      {/* <Sidebar /> */}

      <div className="main-content">
        <Header />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;