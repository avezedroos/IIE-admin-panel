import { useEffect, useState } from "react";
import { getAllSales } from "../api/saleApi";

const Dashboard = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    try {
      const data = await getAllSales();
      console.log(data); // check data
      setSales(data);
    } catch (error) {
      console.error("Error fetching sales", error);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Total Orders: {sales.length}</p>

      <ul>
        {sales.map((item) => (
          <li key={item._id}>
            {item.customerName} - ₹{item.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;