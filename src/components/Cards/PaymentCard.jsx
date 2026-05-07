export const PaymentCard = ({ type, amount }) => {
  return (
    <div className={`card stats-card payment-card ${type.toLowerCase()}`}>
      <h3>{type}</h3>
      <h2>₹{amount}</h2>
    </div>
  );
};