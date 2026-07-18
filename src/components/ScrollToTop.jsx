import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className=" hidden sm:block fixed bottom-6 right-6 z-50 p-3 bg-amber-600 text-white rounded-full shadow-lg shadow-amber-600/30 hover:bg-amber-700 hover:scale-110 transition-all duration-200"
      aria-label="Scroll to top"
    >
      <KeyboardArrowUpIcon />
    </button>
  );
}

export default ScrollToTop;
