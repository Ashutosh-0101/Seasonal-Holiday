import React from "react";
import Profile from "../../../components/accelerator/Profile";
import Masonry from '@mui/lab/Masonry';

import { useContext } from "react";
import { HolidayContext } from "../../../context/HolidayProvider";
import data from '../../../utils/Data/review.json'

const Review = () => {
 
const reviews=data.review
  return (
    <div className="content-center justify-center flex flex-col w-full px-4 sm:px-10 lg:mb-12 mb-32">
  <div className="flex flex-wrap justify-center gap-8 lg:gap-32">
    <div className="pt-16 sm:pt-56 w-full lg:w-[41.25rem]">
      <h1 className="text-2xl sm:text-4xl font-bold text-center">CUSTOMER REVIEW</h1>
      <p className="text-md sm:text-base text-justify sm:text-lg">
        Read testimonials from satisfied customers who have found the
        perfect Father's Day gift with us.
      </p>
    </div>
    <div className="w-full lg:w-[40rem]">
      <Profile />
    </div>
  </div>

  <div className="flex flex-wrap px-4 sm:px-20 lg:px-40 mt-4 lg:mb-10 mb-20">
    <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
      {reviews.map((review, index) => (
        <div key={index} className="reviews border rounded-lg p-5">
          <img src={review.proImg} alt="" />
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Mad1CaqgHqimg-star.png?v=1716173496"
            className="w-12 my-2"
            alt=""
          />
          {review.reviewText}
          <h2 className="my-2 font-bold">{review.customerName}</h2>
          <div className="flex items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Wdo7jIDYNpchecked-ic.png?v=1716195426"
              className="w-5 h-5"
              alt=""
            />{" "}
            <span className="ml-2 text-sm">Verified User</span>
          </div>
        </div>
      ))}
    </Masonry>
  </div>
</div>

  );
};

export default Review;
