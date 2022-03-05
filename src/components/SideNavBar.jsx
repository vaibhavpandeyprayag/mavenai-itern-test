/*
  This component shows the Side Navigation Bar.
  It has 5 items - dashboard, analytics, trading, notifications and logout.
  It is responsive in nature. For large screen it is on the left side, whereas for medium and small sized screen, it is situated at the top of page.
*/

import dashboardIcon from "../resources/metrics.svg";
import analyticsIcon from "../resources/analytics.svg";
import tradingIcon from "../resources/currency-exchange-2.svg";
import notificationsIcon from "../resources/sound-wave.svg";
import logoutIcon from "../resources/logout.svg";
import SideNavItem from "./SideNavItem";

const SideNavBar = () => {
  return (
    <div className="d-flex flex-lg-column justify-content-between mt-lg-4 mt-2 mb-lg-5 mb-1 px-3 custom-width-2">
      <div className="d-flex flex-lg-column gap-lg-4 gap-2">
        <SideNavItem
          className="shadow"
          itemName={"Dashboard"}
          itemImage={dashboardIcon}
        />
        <SideNavItem itemName={"Analytics"} itemImage={analyticsIcon} />
        <SideNavItem itemName={"Trading"} itemImage={tradingIcon} />
        <SideNavItem itemName={"Notifications"} itemImage={notificationsIcon} />
      </div>

      <div>
        <SideNavItem itemName={"Logout"} itemImage={logoutIcon} />
      </div>
    </div>
  );
};

export default SideNavBar;
