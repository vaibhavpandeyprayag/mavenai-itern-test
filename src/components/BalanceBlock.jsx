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
