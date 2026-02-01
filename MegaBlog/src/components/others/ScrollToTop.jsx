import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // এটি pathname এবং search (query params) সব ট্র্যাক করে

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // পেজ চেঞ্জ হলে বা পেজিনেশন করলে স্মুথলি উপরে যাবে
    });
  }, [location]); // location ডিপেন্ডেন্সি হিসেবে থাকায় পেজিনেশন চেঞ্জ হলেও কাজ করবে

  return null;
};

export default ScrollToTop;