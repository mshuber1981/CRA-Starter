import React from "react";
// Images
import desktop from "../media/desktop.png";
import desktop2x from "../media/desktop@2x.png";
import tablet from "../media/tablet.png";
import tablet2x from "../media/tablet@2x.png";
import mobile from "../media/mobile.png";
import mobile2x from "../media/mobile@2x.png";

const ResponsiveImages = () => {
  return (
    <>
      <picture className="mb-3">
        <source media="(max-width: 420px)" srcSet={`${mobile}, ${mobile2x}`} />
        <source media="(max-width: 820px)" srcSet={`${tablet}, ${tablet2x}`} />
        <source srcSet={`${desktop}, ${desktop2x}`} />
        <img src={desktop} alt="Desktop computer icon" />
      </picture>
    </>
  );
};

export default ResponsiveImages;
