/*
  This component shows comparison among different countries.
  It takes country flag image, country name and rate percentage value as prop.
  It compares different countries by plotting their percentage values on progress bar.
*/

const CountryComparisonBar = ({
  countryName,
  countryFlag,
  percentage,
  className,
}) => {
  const progress = percentage + "%";
  return (
    <div>
      <div className="d-flex gap-3 mb-2 align-items-center">
        <img className="" src={countryFlag} />
        <small className="custom-text-color-3 custom-text-shadow-1">
          {countryName}
        </small>
      </div>
      <div className="d-flex gap-3 align-items-center">
        <div
          className={"progress-bar rounded-pill " + className}
          role={"progressbar"}
          style={{ width: progress, height: "0.5rem" }}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>

        <small className="custom-text-color-3 custom-text-shadow-1">
          {progress}
        </small>
      </div>
    </div>
  );
};

export default CountryComparisonBar;
