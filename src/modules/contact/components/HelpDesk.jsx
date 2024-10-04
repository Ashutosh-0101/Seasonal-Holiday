import React,{useContext} from "react";
import ContactProvider, { ContactContext } from "../../../context/ContactProvider";

const data = [
  {
    t1: "Size Guide",
    t2: "Ensure your customers get the right fit",
    t3: "view more",
  },
  {
    t1: "Size Guide",
    t2: "Ensure your customers get the right fit",
    t3: "view more",
  },
  {
    t1: "Size Guide",
    t2: "Ensure your customers get the right fit",
    t3: "view more",
  },
  {
    t1: "Size Guide",
    t2: "Ensure your customers get the right fit",
    t3: "view more",
  },
  {
    t1: "Size Guide",
    t2: "Ensure your customers get the right fit",
    t3: "view more",
  },
  {
    t1: "Size Guide",
    t2: "Ensure your customers get the right fit",
    t3: "view more",
  },
];

const HelpDesk = () => {
  const data=useContext(ContactContext);
  console.log(data);
  return (
    <div className=" mb-10  flex flex-col justify-center  p-10 lg:p-0">
      <div className=" text-3xl text-center font-bold mb-12">Browse our help desk</div>
      <div className="flex flex-wrap justify-center gap-10 md:px-36">
       {data.contactPage.helpDesk.map((obj) => (
  <div className="help border p-5  rounded-xl md:w-3/12 h-56">
    <div className="my-2">
      <img className="h-10 w-10" src={obj.logo} alt="" />
    </div>
    <div className="font-bold">{obj.tag}</div>
    <div className="my-2 font-light text-gray-400	">{obj.tagLine}</div>
    <div className=" hover:text-red-300	">View More</div>
  </div>
))}
      </div>
    </div>
  );
};

export default HelpDesk;
