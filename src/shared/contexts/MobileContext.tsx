import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

interface MobileContextType {
  isMobile: boolean;
}

const defaultContextData: MobileContextType = {
  isMobile: false,
};

const MobileContext = createContext<MobileContextType>(defaultContextData);

export const MobileProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth < 1260) {
      setIsMobile(true);
      return;
    }

    setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

export const useMobile = () => useContext(MobileContext);
