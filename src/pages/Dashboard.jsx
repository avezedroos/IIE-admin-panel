import { useEffect, useState } from "react";
import { getAllSales } from "../api/saleApi";
import { StatsCard } from "../components/Cards/StatsCard";
import { calculateTotalEarning, getSalesByDate, getTotalBoxes } from "../utils/FilterFunctions";
import { BiBox } from 'react-icons/bi'; // Boxicons version
import { FiBox } from 'react-icons/fi'; // Feather version
import { FaBox } from 'react-icons/fa'; // Font Awesome version
import { PaymentCard } from "../components/Cards/PaymentCard";
import { calculatePaymentByMode } from "../utils/calculatingFunction";
import FilterBar from "../components/FilterBar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [sales, setSales] = useState([]);
  const [filterSales, setFilterSales] = useState([]);
  // const [paymentMode,setPaymentMode]= useState(null)
  
const FilterDate = useSelector((state) => state.meta.filter.date);
// const filterSale = 
console.log(FilterDate)
  useEffect(() => {
    fetchSales();
  }, []);

   useEffect(() => {
     setFilterSales(getSalesByDate(sales,FilterDate));
  }, [FilterDate]);

  const fetchSales = async () => {
    try {
      const data = await getAllSales();
      setSales(data);
      setFilterSales(getSalesByDate(sales,FilterDate));
      
    } catch (error) {
      console.error("Error fetching sales", error);
    }
  };

  console.log(sales[0])
  return (
    <div>
<FilterBar />

<div className="cardSection">


      <h2 className="cardTitle">Report</h2>

      <div className="mainCardsSection">
        <StatsCard title={"total box Sales"} value={getTotalBoxes(filterSales)} icon={<BiBox size={30} color="orrang" />} />
        <StatsCard title={"total Earning"} value={calculateTotalEarning(filterSales)} icon={<BiBox size={30} color="orrang" />} />
        <StatsCard title={"total Customers"} value={filterSales.length} icon={<BiBox size={30} color="orrang" />} />
      </div>
      </div>

<div className="cardSection">
<h2 className="cardTitle">payments method</h2>
       <div className="mainCardsSection">
        <StatsCard title={"Cash"} value={calculatePaymentByMode(filterSales, "cash")} icon={<BiBox size={30} color="orrang" />} />
        <StatsCard title={"Online"} value={calculatePaymentByMode(filterSales, "online")} icon={<BiBox size={30} color="orrang" />} />
        <StatsCard title={"Udhar"} value={calculatePaymentByMode(filterSales, "udhar")} icon={<BiBox size={30} color="orrang" />} />
        {/* <PaymentCard type={""} amount={}/> */}
      </div>

</div>

        
    </div>
  );
};

export default Dashboard;