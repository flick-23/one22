import React from "react";
import { useState } from "react";

// core components

function EventPageHeader() {
  let pageHeader = React.createRef();
  const [isVisible, setIsVisible] = useState(true);

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  React.useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 150;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <>
      <div className="page-header page-header-small">
        <div>
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("../../assets/img/LandingPageLogo.jpg").default +
                ")",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            ref={pageHeader}
          ></div>
        </div>
      </div>
    </>
  );
}

export default EventPageHeader;
