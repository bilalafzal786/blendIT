import React from "react";

const Banner = (props) => {
  return (
    <>
      <div className="banner bg-[#5F60FF] py-[30px] flex justify-center">
        <div className="md:max-w-[70%] max-w-[90%]">
          <p className="text-white md:font-[750] font-[500] md:text-[30px] text-[20px] leading-[36px] md:px-10 px-4 text-center">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
