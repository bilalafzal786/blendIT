import React from "react";
import { useLocation } from "react-router-dom";

const ShowData = (props) => {
  const location = useLocation();
  const { firstName, lastName, position, companyName, email, contact } =
    location.state;
  console.log(lastName);
  return (
    <>
      <div className="md:w-[50%] w-[80%] mx-auto bg-slate-50 rounded">
        <div className="profile-icon flex justify-center flex-col pt-6">
          <img src="./user.png" className="mx-auto max-w-[250px]" />
          <p className="mx-auto font-[700] text-[24px] text-slate-800 py-8">
            {firstName} {lastName}
          </p>
        </div>
        <ul className="details px-[40px] list-disc py-10">
          <li className="font-[500] text-xl text-slate-600">{position}</li>
          <li className="font-[500] text-xl text-slate-600">{companyName}</li>
          <li className="font-[500] text-xl text-slate-600">{email}</li>
          <li className="font-[500] text-xl text-slate-600">{contact}</li>
        </ul>
      </div>
    </>
  );
};

export default ShowData;
