import { Link } from "react-router-dom";
// import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/orders">Orders</Link>
    </div>
  );
};

export default Sidebar;