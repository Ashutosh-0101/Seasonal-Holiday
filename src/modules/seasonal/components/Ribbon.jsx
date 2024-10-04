import React, { useContext } from "react";
import { HolidayContext } from "../../../context/HolidayProvider";
import "../../../style/ribbon.css";
const Ribbon = () => {
  const ribbon = useContext(HolidayContext);
  const ribbonData = ribbon.ribbon;
  console.log(ribbon);
  return (
    <div className=" ribbon flex flex-wrap justify-center content-center py-14 px-10 text-white">
      <div className=" w-[25rem]">
        <div className="flex h-3/6 my-2 ">
          <img
            className=" h-[6.25rem] w-[6.25rem]"
            src={ribbonData.canDid}
            alt=""
          />
          <div>
            <h2 class="text-4xl font-bold pb-2 px-3">Maximum Fit</h2>
            <p className="px-3">
              Set customized feeding schedules to ensure your cat gets the right
              amount of food at the right time.
            </p>
          </div>
        </div>
        <div className="flex h-3/6 my-2 ">
          <img
            className=" h-[6.25rem] w-[6.25rem]"
            src={ribbonData.canDid}
            alt=""
          />
          <div>
            <h2 class="text-4xl font-bold pb-2 px-3"> Maximum Fit</h2>

            <p className="px-3">
              Set customized feeding schedules to ensure your cat gets the right
              amount of food at the right time.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[25rem] h-3/4 my-2">
        <img className="h-[100%]" src={ribbon.ribbon.midImg} alt="" />
      </div>
      <div className=" w-[25rem]">
        <div className="flex h-3/6  my-2">
          <img
            className=" h-[6.25rem] w-[6.25rem]"
            src={ribbonData.canDid}
            alt=""
          />
          <div>
            <h2 class="text-4xl font-bold pb-2 px-3">Maximum Fit</h2>
            <p className="px-3">
              Set customized feeding schedules to ensure your cat gets the right
              amount of food at the right time.
            </p>
          </div>
        </div>
        <div className="flex h-3/6 my-2">
          <img
            className=" h-[6.25rem] w-[6.25rem]"
            src={ribbonData.canDid}
            alt=""
          />
          <div>
            <h2 class="text-4xl font-bold pb-2 px-3">Maximum Fit</h2>
            <p className="px-3">
              Set customized feeding schedules to ensure your cat gets the right
              amount of food at the right time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
