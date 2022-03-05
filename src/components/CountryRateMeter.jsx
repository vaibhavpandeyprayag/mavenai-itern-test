const CountryRateMeter = ({ countryName, rateValue, indication, graph }) => {
  const indicator =
    indication === "up" ? (
      <i className="bi bi-caret-up-fill custom-green-1 pt-1"></i>
    ) : indication === "down" ? (
      <i className="bi bi-caret-down-fill custom-red-1 pt-1"></i>
    ) : (
      <></>
    );
  return (
    <div className="bg-white d-flex flex-column align-items-center">
      <h6 className="small text-center custom-text-color-3 custom-text-shadow-1 mb-3">
        {countryName}
      </h6>
      <div className="d-flex gap-2 justify-content-center">
        <h3 className="custom-text-color-2">{rateValue}</h3>
        {indicator}
      </div>
      <img src={graph} className="mt-1 w-75" />
    </div>
  );
};

export default CountryRateMeter;
