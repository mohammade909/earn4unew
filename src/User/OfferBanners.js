import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";

import { fecthUserOffers } from "../redux/offer";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CountdownTimer from "../CoreFile/Timer";
import { getUser } from "../redux/userSlice";
// Custom Button Component
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`
      px-4 py-2 
      bg-blue-500 
      text-white 
      rounded-md 
      hover:bg-blue-600 
      transition-colors 
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

const TrendingOffersBanner = () => {
  const dispatch = useDispatch();
  const offers = useSelector((state) => state.offers?.offers);
  const { auth } = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth?.id) {
      const id = auth?.id;
      // dispatch(getUser(id));
      dispatch(fecthUserOffers(id));
    }
  }, [dispatch]);

  return (
    <div className="w-full relative">
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 20000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-[500px]"
    >
      {offers && offers.length > 0 ? (
        offers.map((offer) => (
          <SwiperSlide key={offer.offer_id} className="relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: `url(${offer.bgImage})`,
                filter: "brightness(0.6)",
              }}
            />
  
            {/* Overlay Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-white px-4 md:px-20">
              <div className="max-w-2xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {offer.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 opacity-90">
                  {offer.description}
                </p>
  
                {/* Offer Details */}
                <div className="flex justify-center gap-6 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-sm">Reward</p>
                    <p className="text-2xl font-bold text-yellow-300">
                      ${offer.reward}
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-sm">Business Value</p>
                    <p className="text-2xl font-bold text-green-300">
                      ${offer.business_val}
                    </p>
                  </div>
                </div>
  
                {/* Countdown Timer */}
                <div className="mb-8 flex justify-center">
                  <CountdownTimer
                    startDate={offer.start_date}
                    endDate={offer.end_date}
                  />
                </div>
  
                {/* Action Buttons */}
                <div className="flex justify-center space-x-4">
                  <Button>View Details</Button>
                  <Button className="bg-transparent border-2 border-white hover:bg-white/20">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide className="flex items-center justify-center h-[500px] text-white text-2xl font-bold bg-gray-800">
          No Available Offers
        </SwiperSlide>
      )}
    </Swiper>
  </div>
  
  );
};

export default TrendingOffersBanner;
