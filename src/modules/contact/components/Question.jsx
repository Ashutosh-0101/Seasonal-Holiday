import React from "react";

const data = [
  {
    id: 1,
    icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892",
    tag: "Phone",
    linkText: "0192-9292-9292",
  },
  {
    id: 2,
    icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892",
    tag: "Phone",
    linkText: "0192-9292-9292",
  },
  {
    id: 3,
    icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892",
    tag: "Phone",
    linkText: "0192-9292-9292",
  },
  {
    id: 4,
    icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892",
    tag: "Phone",
    linkText: "0192-9292-9292",
  },
];

const Question = () => {
  return (
    <div className="flex flex-col justify-center text-center w-full my-28">
      <div className=" text-center text-3xl font-bold mb-1">
        Any other questions?
      </div>
      <div className=" text-center text-lg font-medium mb-10 p-10 lg:p-0">
        We’re here to help. You can contact us: Weekdays: 6am to 6pm PT,
        Weekends: 6am to 6pm PT.
      </div>
      <div className="flex justify-center w-full text-center text-center  px-0  lg:p-0">
        <div className="flex border border-black rounded-xl flex-wrap justify-center lg:gap-10  gap-2 md: w-9/12  py-10 ">
          {data.map((obj,index) => (
            <div key={index} className="w-[7.325rem] h-[10.75rem] lg:w-1/5 lg:h-30 border-gray border-r-2">
              <div className="flex justify-center">
                <img className="w-10 h-10 " src={obj.icon} alt="" />
              </div>
              <div className=" text-lg font-bold">{obj.tag}</div>
              <div className=" text-lg font-bold">{obj.linkText}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
