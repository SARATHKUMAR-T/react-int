import { useEffect, useState } from "react";

export function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  // determine if the element is visible
  const observer = function () {
    const offset = -120;
    const top = ref.current.getBoundingClientRect().top;
    console.log(top, "top");
    console.log(ref.current.getBoundingClientRect(), "bounding client rep");
    console.log(window.innerHeight, "inner height");

    setIntersecting(top + offset >= 0 && top - offset <= window.innerHeight);
  };

  useEffect(() => {
    // first check
    observer();

    // assign the listener
    window.addEventListener("scroll", observer);

    // remove the listener
    return () => {
      window.removeEventListener("scroll", observer);
    };
  }, []);

  return isIntersecting;
}