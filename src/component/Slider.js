import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import groupImg from "../images/party.jpg";
import instantImg from "../images/instantImg.jpg";
import collection from "../images/collection.jpg";
import Clubs from "../images/clubs.jpg";
import "swiper/css";
import "swiper/css/pagination";
function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className=" w-full h-72 max-[500px]:h-44 overflow-hidden rounded-b-2xl"
      >
        <SwiperSlide className=" flex items-center text-center justify-center bg-[#f3f3f3]">
          <section className="  rounded-b-2xl flex items-center h-full p-3 gap-3">
            <div className=" rounded-xl overflow-hidden max-[500px]:w-8/12">
              <img
                src={groupImg}
                alt=""
                className="w-full max-[500px]:h-full object-cover h-60 rounded-xl"
              />
            </div>
            <div className="  w-5/12 text-start font-Roboto">
              <h1 className="text-2xl  font-semibold max-[500px]:text-xl w-full">
                Groups
              </h1>
              <p className="w-full text-sm mt-3 tracking-wide min-[500px]:hidden">
                Want to log bills & settle up later ? Create a Group of expenses
                .
              </p>
              <p className="w-full text-sm mt-3 tracking-wide max-[500px]:hidden">
                Log bills, settle later! Form an Expense Group to track shared
                expenses. Simplify split calculations and manage finances
                effortlessly. Convenient and efficient way to share bills.
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className=" flex items-center text-center justify-center bg-[#f3f3f3]">
          <section className="  rounded-b-2xl flex items-center h-full p-3 gap-3">
            <div className=" rounded-xl overflow-hidden max-[500px]:w-7/12 w-6/12 max-[500px]:h-32">
              <img
                src={instantImg}
                alt=""
                className="w-full max-[500px]:h-full object-cover rounded-xl h-60 "
              />
            </div>
            <div className="  w-5/12 text-start font-Roboto">
              <h1 className="text-2xl  font-semibold max-[500px]:text-xl w-full">
                Instant Bills
              </h1>
              <p className="w-full text-sm mt-3 tracking-wide min-[500px]:hidden">
                Want to settle up your expense urgently ? Makar your expense as
                Instant .
              </p>
              <p className="w-full text-sm mt-3 tracking-wide max-[500px]:hidden">
                Settle up expenses urgently? Make them instant! Utilize fast
                payment methods to clear dues promptly and avoid delays. Stay on
                top of finances and achieve peace of mind.
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className=" flex items-center text-center justify-center bg-[#f3f3f3]">
          <section className="  rounded-b-2xl flex items-center h-full p-3 gap-3">
            <div className=" rounded-xl overflow-hidden max-[500px]:w-7/12 w-6/12 max-[500px]:h-32">
              <img
                src={collection}
                alt=""
                className="w-full max-[500px]:h-full object-cover h-60 rounded-xl"
              />
            </div>
            <div className="  w-5/12 text-start font-Roboto">
              <h1 className="text-2xl  font-semibold max-[500px]:text-xl w-full">
                Collection
              </h1>
              <p className="w-full text-sm mt-3 tracking-wide min-[500px]:hidden">
                Tride of adding expense one by one ? Add all at once to a
                collection .
              </p>
              <p className="w-full text-sm mt-3 tracking-wider max-[500px]:hidden">
                Tired of adding expenses one by one? Add them all at once to a
                collection. Save time and effort, ensuring a comprehensive
                record of expenses for better management and analysis.
              </p>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide className=" flex items-center text-center justify-center bg-[#f3f3f3]">
          <section className="  rounded-b-2xl flex items-center h-full p-3 gap-3">
            <div className=" rounded-xl overflow-hidden max-[500px]:w-7/12 w-6/12 max-[500px]:h-32">
              <img
                src={Clubs}
                alt=""
                className="w-full max-[500px]:h-full object-cover rounded-xl h-60"
              />
            </div>
            <div className="  w-5/12 text-start font-Roboto">
              <h1 className="text-2xl  font-semibold max-[500px]:text-xl w-full">
                Clubs
              </h1>
              <p className="w-full text-sm mt-3  tracking-wide min-[500px]:hidden">
                Split with the same people often ? Time to gang up !"
              </p>
              <p className="max-[500px]:hidden w-full text-sm mt-3  tracking-wider">
                Recurring splits? Time to reevaluate relationships. Open
                communication, understanding, and compromise are essential.
                Consider finding common ground to build stronger connections or
                part ways amicably for personal growth.
              </p>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
