import React, { useContext } from "react";
import "../../style/contact.css";
import HelpDesk from "./components/HelpDesk";
import Popular from "./components/Popular";
import Question from "./components/Question";
import Footer from "../../components/footer";
import { ContactContext } from "../../context/ContactProvider";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const data = useContext(ContactContext);
  console.log(data);
  return (
    <>
      <div className="mainDiv flex flex-col text-center justify-center h-[23.0625rem] lg:h-3/4 w-full lg:py-40 relative mb-[20.5rem] lg:max-h-max p-5  lg:p-0">
        <div className=" min-w-max pb-12">
          <h1 className=" text-4xl font-bold text-slate-50 text-white">
            HELP CENTER
          </h1>
          <p className=" text-xl font-light text-slate-50 text-white">
            Let us know how we may help you?
          </p>
        </div>
        <div className="flex justify-center h-16 ">
          <div className=" searchDiv flex justify-between items-center md:max-w-max  border rounded-full pl-4 pr-1">
            <input
              className=" md:w-[43.75rem] h-3/6 outline-0"
              placeholder="search"
              type="text"
            />
            <button className="md:w-24 text-slate-5 text-white bg-black h-14 rounded-full">
              search
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-[1rem] lg:gap-[1.25rem] w-10/12 lg:w-full flex-wrap absolute top-[18rem] lg:top-[28.5rem]">
          {data.contactPage.orders.map((obj) => (
            <div className="border rounded-3xl w-full  h-52 lg:w-[28.75rem] lg:h-60 py-4 px-2 lg:p-10 bg-white	">
              <div className="flex justify-center my-2">
                <img className="h-10 w-10" src={obj.logo} alt="" />
              </div>
              <div className=" font-bold">{obj.tag}</div>
              <div className="my-2 text-gray">{obj.tagLine}</div>
              <div>
                <button className="button h-10 w-40 rounded-lg hover:bg-gray-700 hover:text-gray-200">
                  Track your order <BsArrowRight />
                </button>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
      <HelpDesk />
      <Popular />
      <Question />
      <Footer />
    </>
  );
};

export default Contact;

// https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=600
