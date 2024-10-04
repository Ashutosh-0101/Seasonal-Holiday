import React, { useContext } from "react";
import VideoPlayer from "../../components/accelerator/VideoPlayer";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Ribbon from "./components/Ribbon";
import CarouselTag from "../../components/Carousal/c";
import Profile from "../../components/accelerator/Profile";
import Review from "./components/review";
import Footer from "./components/footer";
import ProductPage from "./components/Product";

const Seasonal = () => {
  return (
    <>
      <div className="static">
        <Banner />
      </div>
      <div className="static">
        <Gallery />
      </div>
      <Ribbon />
      <ProductPage />
      <Review />
      <Footer />
    </>
  );
};

export default Seasonal;
