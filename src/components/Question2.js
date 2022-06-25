import React from "react";
import Banner from "./Banner";
import CompanyLogo from "./CompanyLogo";
import { useNavigate } from "react-router-dom";

const Question2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CompanyLogo />
      <div className="md:w-[80%] w-[90%] mx-auto flex gap-x-[68px] flex-wrap">
        <p className="flex items-center font-[350] text-[20px] leading-6 text-[#B0B0B0] pt-[28px] pb-[23px]">
          Use case 1
          <svg
            className="ml-[69px] mt-1"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z"
              fill="#B0B0B0"
            />
          </svg>
        </p>
        <p className="flex items-center font-[350] text-[20px] leading-6 text-[#5F60FF] pt-[28px] pb-[23px] ">
          Use case 2
          <svg
            className="ml-[69px] mt-1"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z"
              fill="currentColor"
            />
          </svg>
        </p>
        <p className="flex items-center font-[350] text-[20px] leading-6 text-[#B0B0B0] pt-[28px] pb-[23px] ">
          Use case 3
          <svg
            className="ml-[69px] mt-1"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.70711 8.70711C9.09763 8.31658 9.09763 7.68342 8.70711 7.29289L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L6.58579 8L0.928932 13.6569C0.538408 14.0474 0.538408 14.6805 0.928932 15.0711C1.31946 15.4616 1.95262 15.4616 2.34315 15.0711L8.70711 8.70711ZM7 9H8V7H7V9Z"
              fill="currentColor"
            />
          </svg>
        </p>
      </div>
      <Banner>
        Meeting Minutes for Integrated Concurrent Engineering (ICE)
      </Banner>
      <div className="md:w-[70%] w-[90%] mx-auto mt-[75px]">
        <p className="text-[#B0B0B0] font-[400] text-[30px] leading-9">
          ROI Question
        </p>
        <p className="text-black font-[400] text-[40px] leading-12 pt-4">
          How many clash reports do you do a year?{" "}
        </p>
        <input
          type="number"
          min={0}
          name=""
          id=""
          className="mt-[50px] pt-[29px] pb-[22px] pl-[25px] outline-none focus:bg-gray-50 border-[1px] border-[#B0B0B0] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] 
              rounded-[7.5px] placeholder:font-[350] placeholder:text-[20px] placeholder:text-[#B0B0B0]"
        />
        <div className="btn-container flex sm:flex-row flex-col gap-8 mt-[75px]">
          <button
            className="px-12 py-5 border-[2px] border-[#5F60FF] text-[#5F60FF] rounded-[7.5px] text-[25px] leading-[30px] font-[350] hover:bg-[#eaeaeb] md:w-[150px] w-auto"
            onClick={() => navigate("/")}
          >
            Back
          </button>

          <button
            className="px-12 py-5 border-[2px] border-[#5F60FF] text-white rounded-[7.5px] text-[25px] leading-[30px] font-[350] bg-[#5F60FF]  hover:bg-[#4040fc] ml-[50px]md:w-[150px] w-auto"
            onClick={() => navigate("/question3")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question2;
