import React from "react";
import { CiPaperplane } from "react-icons/ci";
function Temperature({ stats, name, air }) {
  return (
    <div className="flex justify-center items-center absolute inset-0 -z-10 md-[400px] -mt-32 ml-80 ">
      <div className=" w-1/6 h-1/3 -mt-32 p-2 grid grid-cols-2 gap-4 ">
        <h1 className=" font-bold text-4xl col-span-1 ">
          Today's Highlights
          </h1>
        <div className="col-span-2 -mt-20 ml-20 w-[150px] ">
          <div
            className="bg-slate-900 p-6 text-slate-200 flex-col justify-start item-center 
          rounded-lg shadow-xl shadow-black "
          >
            <h1 className="text-sm "> {stats.title} </h1>
            <div>
              <span className="font-bold text-2xl">{stats.value}</span>
              <span>{stats.unit}</span>
            </div>

            {stats.direction ? (
              <div className="flex ">
                <CiPaperplane className="ml-5 mt-1" />
                <h1 className="ms-2"> {stats.direction}</h1>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temperature;
