import React, { useState } from 'react';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mx-auto my-10  p-8 lg:p-0">
  <div className="md:flex justify-center gap-10">
    {/* Left Section: Images */}
    <div className="md:w-6/12 mr-10">
      <div className="flex">
        <div className="flex flex-col">
          {/* Thumbnails */}
          <img
            className="h-28 w-28 border rounded-md object-cover"
            src="https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-m-fd1_400x449_crop_top.png?v=1715927326"
            alt="Thumbnail 1"
          />
          <img
            className="h-28 w-28 border rounded-md object-cover"
            src="https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-m-fd2_400x449_crop_top.png?v=1715927327"
            alt="Thumbnail 2"
          />
          <img
            className="h-28 w-28 border rounded-md object-cover"
            src="https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-m-fd3_400x449_crop_top.png?v=1715927326"
            alt="Thumbnail 3"
          />
          <img
            className="h-28 w-28 border rounded-md object-cover"
            src="https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-m-fd4_400x449_crop_top.png?v=1715927327"
            alt="Thumbnail 4"
          />
        </div>
        <img
          className="rounded-lg mb-4 w-4/5 object-cover"
          src="https://ecomposer-awesome-library.myshopify.com/cdn/shop/files/p-m-fd1.png?v=1715927326&width=1946"
          alt="Product"
        />
      </div>
    </div>

    {/* Right Section: Product Details */}
    <div className="md:w-6/12 md:pl-8 mt-6 md:mt-0">
      <div className="space-x-2 mb-2">
        <div className="font-extralight">(100+ ratings)</div>
      </div>
      <h1 className="text-3xl font-bold mb-4">
        Personalize Daddy Bracelet, Family Bracelet
      </h1>
      <p className="text-green-500 text-sm mb-2">Only 6 left in stock</p>

      <div className="flex mb-6">
        <h2 className="text-2xl font-bold">$399.00</h2>
        <s className="text-gray-500 text-lg">$499.00</s>
      </div>

      <p className="text-blue-500 mb-4">
        These are 30 people viewing this product right now
      </p>

      {/* Beads and Bracelet Size */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Beads Number:</h3>
        <select className="border w-full h-12 rounded-lg p-2 mb-4">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>

        <h3 className="text-lg font-semibold mb-2">Bracelet Color & Size:</h3>
        <select className="border w-full h-12 rounded-lg p-2">
          <option>Silver 6"-6.5"</option>
          <option>Gold 6"-6.5"</option>
          <option>Silver 7"-7.5"</option>
        </select>
      </div>

      {/* Personalization Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add your personalization</h3>
        <p className="text-gray-600 mb-2">Engraving Information:</p>
        <ul className="text-sm text-gray-600 list-disc list-inside">
          <li>I can engrave 8 characters on each bead.</li>
          <li>Space is a character too.</li>
          <li>I can engrave names, initials, dates, roman numerals.</li>
          <li>Personalized as typed out.</li>
        </ul>
        <input
          type="text"
          placeholder="Your personalization"
          className="border w-full h-24 rounded-lg p-2 mt-4"
        />
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex mb-6 w-full justify-center gap-4">
        <div className="flex items-center border border-gray-400 w-3/12 rounded-2xl">
          <button className="p-2 hover:bg-gray-100" onClick={handleDecrement}>-</button>
          <span className="text-lg">{quantity}</span>
          <button className="p-2 hover:bg-gray-100" onClick={handleIncrement}>+</button>
        </div>
        <button className="bg-red-600 text-white w-9/12 font-semibold py-3 px-6 rounded-lg hover:bg-red-700">
          Add to Cart
        </button>
      </div>

      {/* Payment Options */}
      <div className="mt-6">
        <img
          src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-xYANQFRXcwtrust-ft-w.png?v=1701829329"
          alt="Payment options"
          className="h-10"
        />
      </div>
    </div>
  </div>
</div>

  );
};

export default ProductPage;

  

