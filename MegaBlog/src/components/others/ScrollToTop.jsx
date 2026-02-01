import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // বর্তমান URL বা লোকেশন ট্র্যাক করার জন্য useLocation হুক ব্যবহার করা হয়েছে
  const { pathname } = useLocation();

  useEffect(() => {
    // যখনই pathname (URL) পরিবর্তন হবে, তখনই উইন্ডো স্ক্রল হয়ে উপরে চলে যাবে
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // এটি কোনো UI রেন্ডার করবে না, শুধু লজিক হিসেবে কাজ করবে
};

export default ScrollToTop;