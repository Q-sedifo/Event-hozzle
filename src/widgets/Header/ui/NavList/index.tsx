import { RiArrowDownSLine } from "react-icons/ri";

const items = ["Home", "Listings", "User panel", "Shop", "Blog", "Pages"];

export const NavList = () => {
  return (
    <div className="hidden items-center gap-10 text-primary xl:flex">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {item}
          <RiArrowDownSLine />
        </span>
      ))}
    </div>
  );
};
