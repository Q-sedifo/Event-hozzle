import Image from "next/image";
import logo from "@/shared/assets/logo.png";

export const Logo = () => {
  return <Image src={logo} alt="logo" className="w-wit block min-w-fit" />;
};
