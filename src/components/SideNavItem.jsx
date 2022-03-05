const SideNavItem = ({ itemName, itemImage, className }) => {
  return (
    <a
      className={
        "nav-link d-flex flex-column align-items-center px-lg-4 px-2 py-1 " +
        className
      }
      aria-current="page"
      href="#"
    >
      <img className="custom-width-3" src={itemImage} />
      <h6 className="pt-3 custom-text-color-1">{itemName}</h6>
    </a>
  );
};

export default SideNavItem;
