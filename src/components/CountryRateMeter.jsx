/*
  This component shows the rate of different countries using some value and rating graph.
  It takes country name, rate value, graph image (used image just to complete the task; may use some library to plot the rating graph), and indication (up or down)
  If the indication is up, then green upward arrow is shown, else red downward arrow is shown.
*/

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
