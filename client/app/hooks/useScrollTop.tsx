import { useEffect } from "react";

export const useScrollTop = (pathname: string) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
