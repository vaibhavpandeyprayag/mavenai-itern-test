import BalanceBlock from "./components/BalanceBlock";
import CountryComparisonBar from "./components/CountryComparisonBar";
import CountryRateMeter from "./components/CountryRateMeter";
import CurrenciesBlock from "./components/CurrenciesBlock";
import ProfitLossBlock from "./components/ProfitLossBlock";
import SideNavBar from "./components/SideNavBar";
import TeamMember from "./components/TeamMember";
import memberPic1 from "./resources/memberDummy1.png";
import memberPic2 from "./resources/memberDummy2.png";
import memberPic3 from "./resources/memberDummy3.png";
import memberPic4 from "./resources/memberDummy4.png";
import addIcon from "./resources/e-add.svg";
import rateUp1 from "./resources/rateUp1.png";
import rateUp2 from "./resources/rateUp2.png";
import rateDown from "./resources/rateDown.png";
import usaFlag from "./resources/usa.svg";
import italyFlag from "./resources/italy.svg";
import spainFlag from "./resources/spain.svg";

function Dashboard() {
  return (
    <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-between ">
      <SideNavBar />
      <div className="bg-light flex-grow-1 custom-padding-start-1 custom-padding-end-1 pt-5">
        <div className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column justify-content-lg-between justify-content-md-between justify-content-sm-between gap-lg-0 gap-3">
          <div>
            <h1 className="custom-text-color-6 mb-3">Dashboard</h1>
            <h6 className="custom-text-color-1">Welcome back, Andrew</h6>
          </div>
          <div className="d-flex gap-3 justify-content-between align-items-center">
            <div className="btn d-flex gap-2 custom-bg-green-1 text-light custom-box-shadow-1 me-3 py-2 pe-4 flex-shrink-0">
              <img
                className="opacity-75"
                style={{ width: "1rem" }}
                src={addIcon}
              />
              Add Unit
            </div>
            <div className="d-flex gap-3 align-items-center">
              <img
                src={memberPic1}
                className="rounded-circle custom-box-shadow-1"
                style={{ width: "3.2rem" }}
              />
              <h6 className="d-flex custom-text-color-1 flex-shrink-0">
                Andrew Johnston
              </h6>
            </div>
          </div>
        </div>
        <div className="mt-5 pe-1 pe-sm-1 pe-md-2 pe-lg-4 ">
          <div className="statistics-panel d-flex flex-column flex-lg-row flex-md-column flex-sm-column justify-content-start align-items-start">
            <div className="d-flex justify-content-between align-items-start mb-lg-0 mb-md-5 mb-sm-5 mb-5 custom-width-1">
              <BalanceBlock balanceValue={5900} />
              <div
                className="vr d-lg-block d-md-block d-none custom-margin-left-1"
                style={{
                  width: "0.1rem",
                  opacity: "10%",
                }}
              ></div>
              <ProfitLossBlock
                revenueType={"profit"}
                revenueValue={960}
                revenuePercentage={56}
              />
            </div>
            <div
              className="vr d-lg-block d-none custom-margin-x-1"
              style={{ width: "0.1rem", opacity: "10%" }}
            ></div>
            <div className="d-flex justify-content-between align-items-start custom-width-1">
              <ProfitLossBlock
                revenueType={"loss"}
                revenueValue={450}
                revenuePercentage={-56}
              />
              <div
                className="vr d-lg-block d-md-block d-none"
                style={{ width: "0.1rem", opacity: "10%" }}
              ></div>
              <CurrenciesBlock />
            </div>
          </div>
          <div className="country-rate-panel d-flex flex-lg-row flex-md-column flex-sm-column flex-column justify-content-evenly mt-5 mb-5 gap-5 custom-padding-1 bg-white shadow">
            <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between justify-content-lg-between gap-5">
              <CountryRateMeter
                countryName={"Italy"}
                rateValue={475}
                indication={"up"}
                graph={rateUp1}
              />
              <CountryRateMeter
                countryName={"United States"}
                rateValue={431}
                indication={"up"}
                graph={rateUp2}
              />

              <CountryRateMeter
                countryName={"Canada"}
                rateValue={174}
                indication={"down"}
                graph={rateDown}
              />
            </div>
            <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column justify-content-between  justify-content-lg-between gap-5">
              <CountryRateMeter
                countryName={"Spain"}
                rateValue={475}
                indication={"up"}
                graph={rateUp1}
              />

              <CountryRateMeter
                countryName={"Japan"}
                rateValue={134}
                indication={"up"}
                graph={rateUp2}
              />
              <CountryRateMeter
                countryName={"South Africa"}
                rateValue={471}
                indication={"down"}
                graph={rateDown}
              />
            </div>
          </div>
          <div className="d-flex flex-lg-row flex-md-column flex-sm-column flex-column gap-5">
            <div className="team-members-panel custom-width-1">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="custom-text-color-6">Team Members</h4>
                <a
                  className="custom-text-color-7 small link text-decoration-none"
                  href=""
                >
                  View All
                </a>
              </div>
              <div className="d-flex flex-column">
                <TeamMember
                  memberName={"Andrew Johnston"}
                  memberImage={memberPic1}
                  memberRank={"Top Trader"}
                />
                <TeamMember
                  memberName={"Anna Atkinsons"}
                  memberImage={memberPic2}
                  memberRank={"Manager"}
                />
                <TeamMember
                  memberName={"Mark Atkinsons"}
                  memberImage={memberPic3}
                  memberRank={"Top Trader"}
                />
                <TeamMember
                  memberName={"Johanna Tairons"}
                  memberImage={memberPic4}
                  memberRank={"Manager"}
                />
              </div>
            </div>
            <div className="contry-comparison-panel custom-width-1">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="custom-text-color-6">Comparison</h4>
                <a
                  className="custom-text-color-7 small link text-decoration-none"
                  href=""
                >
                  View All
                </a>
              </div>
              <div className="d-flex flex-column gap-5 p-4 bg-white shadow">
                <CountryComparisonBar
                  countryName={"United States"}
                  countryFlag={usaFlag}
                  percentage={93}
                  className={"custom-bg-green-1"}
                />
                <CountryComparisonBar
                  countryName={"Italy"}
                  countryFlag={italyFlag}
                  percentage={73}
                  className={"custom-bg-green-1"}
                />
                <CountryComparisonBar
                  countryName={"Spain"}
                  countryFlag={spainFlag}
                  percentage={13}
                  className={"custom-bg-green-3"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
