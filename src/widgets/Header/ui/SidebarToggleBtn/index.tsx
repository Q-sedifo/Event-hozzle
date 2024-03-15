import { useSidebar } from "@/shared/contexts/SidebarContext";
import { VscMenu } from "react-icons/vsc";

export const SideBarToggleBtn = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <VscMenu
      className="block h-[30px] w-[30px] cursor-pointer xl:hidden"
      onClick={toggleSidebar}
    />
  );
};
