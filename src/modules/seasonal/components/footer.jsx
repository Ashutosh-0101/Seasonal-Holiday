import React from 'react'
import '../../../style/footerSeasonal.css'
const Footer = () => {
  return (
<div className="footerSeasonal relative w-full flex flex-col justify-center items-center lg:mt-32 mt-96">
<div className='lg:w-8/12 flex flex-wrap h-[20.25rem] mb-20 absolute lg:top-[-10.625rem] top-[-30rem] px-2'>
<div className="bgFooter rounded-2xl  shadow-md p-6 w-full h=[18.75rem] flex flex-col md:flex-row justify-around items-center mt-10">
        <div className="flex flex-col items-center text-center">
          <div className=" flex justify-center text-yellow-500 text-3xl mb-2">
            
            <img className='h-12 w-12'src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-XhPHwGo61bicon-ft-fd2.png?v=1716170424" alt="" />
          </div>
          <h3 className="font-semibold text-lg">Quality Assurance</h3>
          <p className="text-gray-600">
            Our bracelets are handcrafted with attention to detail and undergo
            rigorous quality checks.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 md:mt-0">
          <div className=" flex justify-center text-yellow-500 text-3xl mb-2">
            <img className='h-12 w-12' src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-vnN9J4F1CHicon-ft-fd1.png?v=1716170405" alt="" />
          </div>
          <h3 className="font-semibold text-lg">Fast Shipping</h3>
          <p className="text-gray-600">
            Enjoy fast and reliable shipping to ensure your gift arrives in time
            for Father’s Day.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mt-6 md:mt-0">
        <div className=" flex justify-center text-yellow-500 text-3xl mb-2">
            <img className='h-12 w-12' src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-wrAg6dbRkCicon-ft-fd3.png?v=1716170478" alt="" />
          </div>
          <h3 className="font-semibold text-lg">Exceptional Service</h3>
          <p className="text-gray-600">
            Our friendly customer support team is available to assist you with
            any questions or concerns.
          </p>
        </div>
        </div>
</div>
  <div className="items-center lg:w-8/12 w-full lg:p-0 p-2 lg:mt-52 mt-24">
    <h1 className=" text-white lg:w-6/12 text-center  lg:text-left text-2xl md:text-4xl font-bold mb-6">
      Subscribe to our newsletter for special discounts
    </h1>
    
    <div className="mb-8 flex flex-wrap gap-4 mb-6">
      <input 
        className="h-14 lg:w-72 w-full md:w-96 border border-gray-300 rounded-md p-4 focus:outline-none" 
        type="text" 
        placeholder="Enter your email" 
      />
      <button className="h-14 lg:w-32  w-full bg-red-600 text-white rounded-md px-4 hover:bg-red-700">
        Subscribe
      </button>
    </div>
    
    <div>
      <img
        className="h-[2.1875rem] lg:w-[21.875rem]"
        src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-xYANQFRXcwtrust-ft-w.png?v=1701829329"
        alt="Payment Logos"
      />
    </div>
    <div className="mt-10 flex md:flex-row  lg:w-3/12  w-full text-white">
        <a href="#" className="hover:text-gray-900">
          Our Story
        </a>
        <a href="#" className="hover:text-gray-900">
          Visit Our Store
        </a>
        <a href="#" className=" hover:text-gray-900">
          Contact Us
        </a>
        <a href="#" className="hover:text-gray-900">
          Account
        </a>
      </div>
  </div>
</div>

  

  )
}

export default Footer