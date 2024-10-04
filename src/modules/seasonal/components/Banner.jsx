import React, { useContext } from "react";
import "../../../style/banner.css";
import { HolidayContext } from "../../../context/HolidayProvider";
import VideoPlayer from "../../../components/accelerator/VideoPlayer";

const Banner = () => {
  const { banner } = useContext(HolidayContext);

  return (
   <>
    <div className="mainDivSeasonal h-[120vh] flex reative flex-wrap-reverse w-full mb-48 ">
      <div className="w-full lg:w-6/12"></div>
      <div className="w-full lg:w-6/12 ">
        <div className="relative">
          <div className=" h-[10rem] w-[20.0625rem] pl-10 lg:h-[27rem] lg:w-[36.0625rem] ">   
            <img src={banner.upperImg} alt="" />
          </div>
          <div className="h-[7rem] w-[7rem] top-[3rem] left-[1.5rem] absolute  lg:h-[14rem] lg:w-[14rem] lg:top-[6.5rem] lg:left-[-2rem] ">
            <img src={banner.tagImg} alt="" />
          </div>
          <div className="h-[1.0625rem] w-[3rem]  right-[3rem] bottom-[-1rem] absolute lg:h-[2.0625rem] lg:w-[6rem] lg:right-[20rem] lg:bottom-[3rem]">
            <img src={banner.star} alt="" />
          </div>
        </div>
        <div className="my-16 mx-12 w-4/5" >
          <p>Hurry up, Deals end soon !</p>
          <div className=" text-4xl font-bold py-8">
          Perfect Gift for fathers day
          </div>
          <h3 className="mb-2">Celebrate Dad with Personalized Daddy Bracelets</h3>
          <button className="h-[4rem] w-[10rem] bg-black text-white">shop now</button>
        </div>
      </div>
        <div className="absolute bottom-[-25.25rem] flex justify-center">
        <VideoPlayer url={banner.video} />
        </div>
     
    </div>
   </>
  );
};

export default Banner;
