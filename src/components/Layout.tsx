import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore
    if (window.AOS) {
      // @ts-ignore
      window.AOS.init();
    }
  }, [location.pathname]);

  return <>{children}</>;
}
