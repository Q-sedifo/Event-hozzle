import Image from "next/image";
import logo from "@/shared/assets/logo.png";
import clsx from "clsx";

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return <Image src={logo} alt="logo" className={clsx("block w-fit min-w-fit", className)} />;
};
