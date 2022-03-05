/*
  This component shows the different currencies being used.
  For now, it shows thumbnails of 4 currencies.
*/

import bitcoinImg from "../resources/bitcoin-2.svg";
import dollarImg from "../resources/currency-dollar.svg";
import euroImg from "../resources/currency-euro.svg";
import yenImg from "../resources/currency-yen.svg";

const Currencies = () => {
  return (
    <div>
      <h6
        className="custom-text-color-1 text-uppercase mb-3"
        style={{ letterSpacing: "2.91px" }}
      >
        Currencies
      </h6>
      <div className="d-flex gap-3">
        <img
          className="rounded-circle alert-primary img-thumbnail"
          style={{ width: "1.6rem", height: "1.6rem" }}
          src={bitcoinImg}
        />
        <img
          className="rounded-circle alert-primary img-thumbnail"
          style={{ width: "1.6rem", height: "1.6rem" }}
          src={dollarImg}
        />
        <img
          className="rounded-circle alert-primary img-thumbnail"
          style={{ width: "1.6rem", height: "1.6rem" }}
          src={euroImg}
        />
        <img
          className="rounded-circle alert-primary img-thumbnail"
          style={{ width: "1.6rem", height: "1.6rem" }}
          src={yenImg}
        />
      </div>
    </div>
  );
};

export default Currencies;
