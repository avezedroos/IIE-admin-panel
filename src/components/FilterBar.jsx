import { useDispatch, useSelector } from "react-redux";
// import { setFilter } from "./ /features/meta/metaSlice";
import { setFilter } from "../features/metaData";

const FilterBar = ({ onOpen }) => {
  const dispatch = useDispatch();

  // ✅ Current selected date from redux
  const selectedDate = useSelector(
    (state) => state.meta.filter.date
  );

  // 🔥 Today's date
  const today = new Date().toISOString().split("T")[0];

  // 🔥 Yesterday date
  const yesterday = new Date(Date.now() - 86400000)
    .toISOString()
    .split("T")[0];

  // ✅ Handle filter click
  const handleDateFilter = (type) => {
    if (type === "today") {
      dispatch(
        setFilter({
          key: "date",
          value: today,
        })
      );
    }

    if (type === "yesterday") {
      dispatch(
        setFilter({
          key: "date",
          value: yesterday,
        })
      );
    }

    if (type === "7days") {
      dispatch(
        setFilter({
          key: "date",
          value: "7days",
        })
      );
    }
  };

  return (
    <div className="filter-bar">
      
      {/* Today */}
      <button
        className={selectedDate === today ? "active" : ""}
        onClick={() => handleDateFilter("today")}
      >
        Today
      </button>

      {/* Yesterday */}
      <button
        className={selectedDate === yesterday ? "active" : ""}
        onClick={() => handleDateFilter("yesterday")}
      >
        Yesterday
      </button>

      {/* 7 Days */}
      <button
        className={selectedDate === "7days" ? "active" : ""}
        onClick={() => handleDateFilter("7days")}
      >
        7 Days
      </button>

      {/* More Filters */}
      <button className="filter-btn" onClick={onOpen}>
        ⚙️ Filters
      </button>
    </div>
  );
};

export default FilterBar;