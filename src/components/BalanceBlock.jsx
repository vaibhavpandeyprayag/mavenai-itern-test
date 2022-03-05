/*
  This component shows the balance.
  It is one of the 4 displays (balance, profits, losses, currencies)
  It takes a number as props to show the balance.
*/

const BalanceBlock = ({ balanceValue }) => {
  return (
    <div>
      <h6
        className="custom-text-color-1 text-uppercase mb-3"
        style={{ letterSpacing: "2.91px" }}
      >
        Balance
      </h6>
      <h3 className="custom-text-color-6">{"$" + balanceValue.toFixed(2)}</h3>
    </div>
  );
};

export default BalanceBlock;
