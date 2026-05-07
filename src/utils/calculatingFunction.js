



export const calculatePaymentByMode = (salesData, mode) => {
  const total = salesData.reduce((sum, sale) => {
    return sum + Number(sale.paymentDetails?.[mode] || 0);
  }, 0);

  return total.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
};