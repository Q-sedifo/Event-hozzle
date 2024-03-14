import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

const items = [
  { title: "Home", src: "/" },
  { title: "Listings", src: "/listings" },
  { title: "User panel", src: "/dashboard" },
  { title: "Shop", src: "/" },
  { title: "Blog", src: "/" },
  { title: "Pages", src: "/" },
];

export const NavList = () => {
  return (
    <div className="hidden items-center gap-10 text-primary xl:flex">
      {items.map((item, index) => (
        <Link href={item.src} key={index}>
          <span className="flex cursor-pointer items-center gap-1 font-medium duration-500 hover:text-cyan">
            {item.title}
            <RiArrowDownSLine />
          </span>
        </Link>
      ))}
    </div>
  );
};
