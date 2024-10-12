import { useState, useEffect } from "react";

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible); // Clean up event listener
    };
  }, []);

  return (
    <>
     <button
  onClick={scrollTop}
  className={`upbtn ${visible ? 'show' : ''}`} // Conditionally adding the 'show' class
>
  <i className="fa-solid fa-arrow-up"></i>
</button>

    </>
  );
};
