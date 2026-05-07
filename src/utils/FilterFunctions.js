export const getSalesByDate = (data, targetDate) => {

  // Safety check
  if (!Array.isArray(data)) {
    console.error("Data is not array", data);
    return [];
  }

  return data.filter((item) => {

    // Check date exists
    if (!item.date) return false;

    // Extract only date
    const itemDate = item.date.split("T")[0];

    return itemDate === targetDate;
  });
};

export const getSalesByDateRange = (data, startDate, endDate) => {
  return data.filter(item => {
    const itemDate = item.date.split("T")[0];

    return itemDate >= startDate && itemDate <= endDate;
  });
};


// counting functions

export const getTotalBoxes = (data) => {
  return data.reduce((total, sale) => {
    const itemsTotal = sale.items?.reduce((sum, item) => {
      return sum + (item.quantity || 0);
    }, 0);

    return total + itemsTotal;
  }, 0);
};

export const calculateTotalEarning = (salesData) => {
  const total = salesData.reduce((total, sale) => {
    const totalAmount = Number(sale.totalAmount || 0);
    const discount = Number(sale.Discount || 0);

    return total + (totalAmount - discount);
  }, 0);

  // Indian Rupees Format
  return total.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
};