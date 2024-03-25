"use client";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

interface Props {
  title: string;
}

export const NavInfo = ({ title }: Props) => {
  const path = usePathname();
  const titles = path.split("/");

  return (
    <div className="mb-10 flex flex-wrap items-center gap-5">
      <h1 className="text-[22px] font-semibold">{title}</h1>
      <span className="flex items-center gap-3 capitalize">
        <span className="text-gray-300">|</span>
        <Link href="/dashboard" className="duration-500 hover:text-cyan">
          Home
        </Link>
        <span className="flex items-center gap-3">
          {titles.map((title, index) => (
            <span key={index} className="flex items-center gap-3">
              {index !== titles.length - 1 ? (
                <Link
                  href={`/${title}`}
                  className="duration-500 hover:text-cyan"
                >
                  {title}
                </Link>
              ) : (
                <>{title}</>
              )}
              {index !== titles.length - 1 && <MdKeyboardArrowRight />}
            </span>
          ))}
        </span>
      </span>
    </div>
  );
};
