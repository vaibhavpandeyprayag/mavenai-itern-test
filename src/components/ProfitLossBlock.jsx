/*
  This component shows profits/losses.
  It takes props - revenueType (profit or loss), revenue value, revenue percentage.
  If revenue percentage > 0, green upward indicator is shown with value in green, else red downward indication with value in red is shown.
*/

const ProfitLossBlock = ({ revenueType, revenueValue, revenuePercentage }) => {
  const heading =
    revenueType === "profit" ? "Profits" : "loss" ? "Losses" : undefined;
  const percentagevalue =
    revenuePercentage >= 0
      ? "+" + revenuePercentage + "%"
      : revenuePercentage + "%";
  const indicator =
    revenuePercentage > 0 ? (
      <i className="bi bi-caret-up-fill custom-green-1"></i>
    ) : revenuePercentage < 0 ? (
      <i className="bi bi-caret-down-fill custom-red-1"></i>
    ) : (
      <></>
    );
  const className =
    revenueType === "profit" ? "custom-green-1" : "custom-red-1";
  return (
    <div className="d-flex gap-4 align-items-center">
      <div className="">
        <h6
          className="custom-text-color-1 text-uppercase mb-3"
          style={{ letterSpacing: "2.91px" }}
        >
          {heading}
        </h6>
        <h3 className="custom-text-color-6">{"$" + revenueValue.toFixed(2)}</h3>
      </div>
      <div className="d-flex align-items-center gap-1 mt-4">
        {indicator}
        <small className={"small " + className}>{percentagevalue}</small>
      </div>
    </div>
  );
};

export default ProfitLossBlock;
