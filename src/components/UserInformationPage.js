import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import CompanyLogo from "./CompanyLogo";
import ShowData from "./ShowData";

const UserInformationPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const [data, setData] = useState({});

  const formData = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    const form = formData.current;
    console.log(form);
    console.log(form["firstName"].value);

    navigate("/showData", {
      state: {
        firstName: form["firstName"].value,
        lastName: form["lastName"].value,
        position: form["position"].value,
        companyName: form["companyName"].value,
        email: form["email"].value,
        contact: form["contact"].value,
      },
    });
  };
  return (
    <>
      <CompanyLogo />

      <Banner>
        Please provide us with your business contact details so we can send you
        the detailed analysis and recommendations based on your inputs.
      </Banner>
      <div className="form-container md:w-[70%] w-[90%] mx-auto mt-[75px]">
        <form ref={formData} onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[50px]">
            <div className="input-group flex flex-col ">
              <label
                htmlFor="firstName"
                className="font-[350] text-[25px] leading-[30px]"
              >
                First Name
              </label>
              <input
                required
                type="text"
                name="firstName"
                id=""
                className="mt-4 pt-[29px] pb-[22px] pl-[25px] outline-none focus:bg-gray-50 border-[1px] border-[#B0B0B0] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] 
              rounded-[7.5px] placeholder:font-[350] placeholder:text-[20px] placeholder:text-[#B0B0B0]"
                placeholder="Enter First Name"
              />
            </div>
            <div className="input-group flex flex-col md:mt-0 mt-10 ">
              <label
                htmlFor="lastName"
                className="font-[350] text-[25px] leading-[30px]"
              >
                Last Name
              </label>
              <input
                required
                type="text"
                name="lastName"
                id=""
                className="mt-4 pt-[29px] pb-[22px] pl-[25px] outline-none focus:bg-gray-50 border-[1px] border-[#B0B0B0] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] 
              rounded-[7.5px] placeholder:font-[350] placeholder:text-[20px] placeholder:text-[#B0B0B0]"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="input-group flex flex-col mt-10">
              <label
                htmlFor="position"
                className="font-[350] text-[25px] leading-[30px]"
              >
                Position Title
              </label>
              <input
                required
                type="text"
                name="position"
                id=""
                className="mt-4 pt-[29px] pb-[22px] pl-[25px] outline-none focus:bg-gray-50 border-[1px] border-[#B0B0B0] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] 
              rounded-[7.5px] placeholder:font-[350] placeholder:text-[20px] placeholder:text-[#B0B0B0]"
                placeholder="Enter Position Title"
              />
            </div>
            <div className="input-group flex flex-col mt-10">
              <label
                htmlFor="companyName"
                className="font-[350] text-[25px] leading-[30px]"
              >
                Company Name
              </label>
              <input
                required
                type="text"
                name="companyName"
                id=""
                className="mt-4 pt-[29px] pb-[22px] pl-[25px] outline-none focus:bg-gray-50 border-[1px] border-[#B0B0B0] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] 
              rounded-[7.5px] placeholder:font-[350] placeholder:text-[20px] placeholder:text-[#B0B0B0]"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="input-group flex flex-col mt-10">
              <label
                htmlFor="email"
                className="font-[350] text-[25px] leading-[30px]"
              >
                Business Email Address
              </label>
              <input
                required
                type="email"
                name="email"
                id=""
                className="mt-4 pt-[29px] pb-[22px] pl-[25px] outline-none focus:bg-gray-50 border-[1px] border-[#B0B0B0] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] 
              rounded-[7.5px] placeholder:font-[350] placeholder:text-[20px] placeholder:text-[#B0B0B0]"
                placeholder="Enter Business Email Address"
              />
            </div>
            <div className="input-group flex flex-col mt-10">
              <label
                htmlFor="contact"
                className="font-[350] text-[25px] leading-[30px]"
              >
                Contact Number
              </label>
              <input
                required
                type="tel"
                name="contact"
                id=""
                className="mt-4 pt-[29px] pb-[22px] pl-[25px] outline-none focus:bg-gray-50 border-[1px] border-[#B0B0B0] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] 
              rounded-[7.5px] placeholder:font-[350] placeholder:text-[20px] placeholder:text-[#B0B0B0]"
                placeholder="Enter Contact Number"
              />
            </div>
          </div>
          <div className="flex justify-between py-[50px]">
            <div className="text">
              <p className="text-[25px] leading-[30px] font-[350]">
                I agree to your GDPR Policy:
              </p>
            </div>
            <div className="toggle-button">
              <div className="flex justify-center">
                <div
                  onClick={() => {
                    setActive(!active);
                  }}
                  className={
                    active
                      ? "toggleBtn cursor-pointer transition duration-200  pt-[5px] rounded-[20px] bg-[#5F60FF] w-20 h-10 mt-1 px-[5px]"
                      : "cursor-pointer transition duration-200  pt-[5px] px-[5px] rounded-[20px] bg-blue-100 w-20 h-10 mt-1"
                  }
                >
                  <svg
                    className={
                      active
                        ? "translate-x-[125%] toggle transition duration-200"
                        : "translate-x-0 transition duration-200"
                    }
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="30" height="30" rx="15" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-container flex justify-center">
            <button
              type="submit"
              className="bg-[#5F60FF] pt-6 pb-5 px-16 text-white font-[350] text-[20px] leading-8 rounded-[7.5px] mx-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserInformationPage;
