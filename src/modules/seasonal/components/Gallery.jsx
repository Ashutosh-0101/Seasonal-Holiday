import React from "react";

const Gallery = () => {
  return (
    <div>
      <div className=" flex justify-center flex-wrap p-10">
        <div className="min-h-max w-[37.5rem]">
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-xCUjIQXTuMbn-gr-2.png?v=1715909558"
            alt=""
          />
        </div>
        <div className=" w-[37.5rem] content-center">
          <h1 className=" text-2xl font-bold mb-2">CUSTOMIZABLE DESIGN</h1>
          Explore our range of bracelet designs that can be personalized with
          Dad's name, initials, or special message.
        </div>
      </div>
      <div className=" flex justify-center flex-wrap-reverse p-10">
        <div className=" w-[37.5rem] content-center">
          <h1 className="text-2xl font-bold mb-2">MEANIGFULL SYMBOLS</h1>
          Explore our range of bracelet designs that can be personalized with
          Dad's name, initials, or special message.
        </div>
        <div className="min-h-max w-[37.5rem]">
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TOgntF8Cgybn-gr-1.png?v=1715909522"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
