import React from "react";
import Image from "next/image";

const CareFusionLogoCard = () => {
  return (
    <div className="flex flex-row">
      <Image
        src="/assets/icons/logo-icon.svg"
        height={1000}
        width={1000}
        alt="Patient"
        className="mb-12 h-10 w-fit"
      />
      &nbsp;
      <h1 className="flex-1 text-white font-bold text-2xl pt-0.5">
        CareFusion
      </h1>
    </div>
  );
};

export default CareFusionLogoCard;
