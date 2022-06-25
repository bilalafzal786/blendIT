import React, { useState } from "react";
import Banner from "./Banner";
import CompanyLogo from "./CompanyLogo";
import Navbar from "./Navbar";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useNavigate } from "react-router-dom";
const Question1 = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <CompanyLogo />
      </div>
      <div className="md:w-[80%] w-[90%] mx-auto flex gap-x-[68px] flex-wrap">
        <p className="flex items-center font-[350] text-[20px] leading-6 text-[#5F60FF] py-4">
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
        <p className="flex items-center font-[350] text-[20px] leading-6 text-[#B0B0B0] py-4 ">
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
        <p className="flex items-center font-[350] text-[20px] leading-6 text-[#B0B0B0] py-4 ">
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
      <Banner>Digital Request For Information (RFI)</Banner>
      <div className="md:w-[70%] w-[90%] mx-auto mt-[75px]">
        <p className="text-[#B0B0B0] font-[400] text-[30px] leading-9">
          Question 01
        </p>
        <p className="text-black font-[400] text-[40px] leading-12 pt-4">
          From 1 to 10 rank your current RFI handling practice.{" "}
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-x-[100px] gap-y-[50px]">
          <div className="col-1 md:basis-[50%] basis-[100%]">
            <p className="text-black font-[400] text-[30px] leading-9 pt-4">
              Being 1
            </p>
            <p className="text-[#B0B0B0] font-[350] text-[15px] leading-p[18px] pt-4">
              RFIs are created an d submitted manually through emails and typed
              into a spreadsheet to track response. Tracking is done manually
              and monitoring of incoming request s on RFI is also done by email.
              Replies and mark-ups on 20 drawings in PDF are extracted from
              Revit to make red marking on drawings and re-uploaded into Revit
              after.
            </p>
          </div>
          <div className="col-1 md:basis-[50%] basis-[100%]">
            <p className="text-black font-[400] text-[30px] leading-9 pt-4">
              Being 10
            </p>
            <p className="text-[#B0B0B0] font-[350] text-[15px] leading-p[18px] pt-4">
              RFIs are created directly from the cloud and linking issues done
              on drawings. Redline directly in the cloud on drawings. Person
              responsible clicks on the notification link for the RFI assigned
              to them. There is a RFI Resolution summary dashboard to allow
              stakeholders to monitor due dates set by stakeholders.
            </p>
          </div>
        </div>

        <div className="btn-container mt-[76px]">
          <div className="py-12">
            <InputRange
              maxValue={10}
              minValue={0}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </div>
        </div>
        <div className="btn-container flex sm:flex-row flex-col gap-8">
          <button
            disabled
            className="px-12 py-5 border-[2px] border-[#5F60FF] text-[#5F60FF] rounded-[7.5px] text-[25px] leading-[30px] font-[350] hover:bg-[#eaeaeb] md:w-[150px] w-auto"
            onClick={() => navigate("/")}
          >
            Back
          </button>

          <button
            className="px-12 py-5 border-[2px] border-[#5F60FF] text-white rounded-[7.5px] text-[25px] leading-[30px] font-[350] bg-[#5F60FF]  hover:bg-[#4040fc] ml-[50px]md:w-[150px] w-auto"
            onClick={() => navigate("/question2")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question1;
