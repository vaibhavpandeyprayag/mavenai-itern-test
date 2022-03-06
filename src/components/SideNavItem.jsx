/*
  This component shows a particular item on Side Nav Bar.
  It takes props - item name, item image (icon), className (for extra designing)
*/

const SideNavItem = ({ itemName, itemImage, className }) => {
  return (
    <a
      className={
        "nav-link d-flex flex-column align-items-center justify-content-between px-lg-4 px-1 py-1 " +
        className
      }
      aria-current="page"
      href="#"
    >
      <img
        className="custom-width-3 d-none d-sm-none d-md-block d-lg-block"
        src={itemImage}
      />
      <h6 className="pt-3 custom-text-color-1">{itemName}</h6>
    </a>
  );
};

export default SideNavItem;
