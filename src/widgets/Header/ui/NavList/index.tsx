import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import clsx from "clsx";

interface Props {
  path: string;
}

const items = [
  { title: "Home", src: "/" },
  { title: "Listings", src: "/listings" },
  { title: "User panel", src: "/dashboard" },
  { title: "Shop", src: "/shop" },
  { title: "Blog", src: "/blog" },
  { title: "Pages", src: "/pages" },
];

export const NavList = ({ path }: Props) => {
  return (
    <div className="hidden items-center gap-10 text-primary xl:flex">
      {items.map((item, index) => (
        <Link href={item.src} key={index}>
          <span
            className={clsx(
              "flex cursor-pointer items-center gap-1 font-medium duration-500 hover:text-cyan",
              {
                "!text-cyan": path?.includes(item.src),
              },
            )}
          >
            {item.title}
            <RiArrowDownSLine />
          </span>
        </Link>
      ))}
    </div>
  );
};
