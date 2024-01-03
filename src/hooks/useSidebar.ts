import { useEffect, useState } from "react";

export default function useSidebar() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    function changeWidth() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", changeWidth);

    if (screenWidth > 1024) {
      setShowSidebar(false);
    }

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenWidth]);

  function toggleSidebar() {
    setShowSidebar((current) => !current);
  }

  return {
    showSidebar,
    toggleSidebar,
  };
}
