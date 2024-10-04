import React from 'react'
import '../../style/review.css'
const Profile = () => {
  return (
    <div className="profile h-auto w-full lg:w-[40.25rem] bg-orange-500 p-8 sm:p-16 rounded-xl">
    <div className="h-2 w-20">
      <img
        src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-SIXIMNkDkystar4.png?v=1715938354"
        alt=""
      />
    </div>
    <div className="my-2 text-base sm:text-lg font-semibold ">Exactly what I needed</div>
    <div className="my-2 text-sm sm:text-base">
      "I purchased a Daddy Bracelet for my husband for Father's Day, and he absolutely loves it! The personalized engraving made it such a special gift, and the quality is outstanding. Thank you for helping me make his day extra special!"
    </div>
    <div className="flex flex-col sm:flex-row items-center my-2">
      <div className="h-16 w-16 sm:h-20 sm:w-20 my-1">
        <img
          className="h-full w-full rounded-full"
          src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-qPGIlunyESavt-rv.png?v=1715938695"
          alt=""
        />
      </div>
      <div className="sm:ml-4 p-3">
        <div className="flex items-center">
          <img
            className="h-5 w-5"
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-vHxdueatCdflag.png?v=1716167688"
            alt=""
          />
          <span className="ml-2 text-sm sm:text-base">Maika C.</span>
        </div>
        <div className="flex items-center mt-1">
          <img
            className="h-5 w-5"
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-AVMqRKCeGfchecked-ic-2.png?v=1716196708"
            alt=""
          />
          <span className="ml-2 text-sm sm:text-base">Verified Buyer</span>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Profile