import React from "react";
import AccordionExpandDefault from "../../../components/accelerator/Accordian";

const Popular = () => {
  return (
    <div className=" flex justify-center flex-wrap w-full bg-amber-200 py-8 px-10">
      <div className="py-4 text-center text-3xl font-bold mb-12">
        Popular Searched Questions
      </div>
      <div className="w-full w-4/5"><AccordionExpandDefault /></div>
    </div>
  );
};

export default Popular;
