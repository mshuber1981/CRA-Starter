import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
// Icons
import { FaChevronCircleUp } from "react-icons/fa";

export function BackToTop({ home }) {
  const [scrollY, setScrollY] = useState("");
  const up = useRef(null);

  useEffect(
    function () {
      function updateScrollY() {
        setScrollY(window.pageYOffset);

        if (scrollY > 500) {
          up.current.classList.add("show-up");
        } else {
          up.current.classList.remove("show-up");
        }
      }

      window.addEventListener("scroll", updateScrollY);

      return () => window.removeEventListener("scroll", updateScrollY);
    },
    [scrollY]
  );

  return (
    <div className="up" ref={up}>
      <Link to={home.links[0].to} offset={0} smooth={true}>
        <FaChevronCircleUp />
      </Link>
    </div>
  );
}
