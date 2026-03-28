import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Fallback for some mobile browsers and delayed rendering
    const scrollHandler = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
      document.body.scrollTo(0, 0);
      document.documentElement.scrollTo(0, 0);
    };

    // Execute multiple times to ensure it catches even slow renders
    requestAnimationFrame(scrollHandler);
    const timeoutId = setTimeout(scrollHandler, 10);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
