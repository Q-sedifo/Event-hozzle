import Image from "next/image";
import logo from "@/shared/assets/logo.png";

export const Logo = () => {
  return <Image src={logo} alt="logo" className="block w-fit min-w-fit" />;
};
