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
          delay: 3650,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className=" w-full overflow-hidden  max-[650px]:h-48 h-[350px] "
      >
        <SwiperSlide className=" px-24 py-4 max-[650px]:px-4 max-[1250px]:px-16">
          <section
            className="  flex items-center gap-10 justify-center drop-shadow-lg py-6 px-8 max-[650px]:py-3
          max-[650px]:gap-3 max-[650px]:px-4
           rounded-3xl text-center bg-[#f3f3f3]"
          >
            <div className=" rounded-xl overflow-hidden max-[650px]:w-9/12">
              <img
                src={groupImg}
                alt=""
                className="w-full object-cover h-64 rounded-xl max-[650px]:h-32"
              />
            </div>
            <div className="  w-6/12 text-start font-Roboto flex flex-col gap-3 max-[650px]:gap-1.5 max-[650px]:text-xs">
              <h1 className="text-2xl  font-semibold max-[650px]:text-xl w-full">
                Groups
              </h1>
              <p className="w-full text-sm  tracking-wide min-[650px]:hidden">
                Want to log bills & settle up later ? Create a Group of expenses
                .
              </p>
              <p className="w-full text-[16px] tracking-wide max-[650px]:hidden ">
                Log bills and settle later! Form an expense group to track
                shared expenses. Simplify split calculations and manage finances
                effortlessly. It's a convenient and efficient way to share
                bills.
              </p>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide className=" px-24 py-4 max-[650px]:px-4 max-[1250px]:px-16">
          <section
            className="  flex items-center gap-10 justify-center drop-shadow-lg py-6 px-8 max-[650px]:py-3
          max-[650px]:gap-3 max-[650px]:px-4
           rounded-3xl text-center bg-[#f3f3f3]"
          >
            <div className=" rounded-xl overflow-hidden max-[650px]:w-9/12">
              <img
                src={instantImg}
                alt=""
                className="w-full object-cover h-64 rounded-xl max-[650px]:h-32"
              />
            </div>
            <div className="  w-6/12 text-start font-Roboto flex flex-col gap-3 max-[650px]:gap-1.5 max-[650px]:text-xs">
              <h1 className="text-2xl  font-semibold max-[650px]:text-xl w-full">
                Instant Bills
              </h1>
              <p className="w-full text-sm  tracking-wide min-[650px]:hidden">
                Need to settle your expense urgently? Mark it as Instant.
              </p>
              <p className="w-full text-[16px] tracking-wide max-[650px]:hidden ">
                Settle up expenses urgently? Make them instant! Utilize fast
                payment methods to clear dues promptly and avoid delays. Stay on
                top of finances and achieve peace of mind.
              </p>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide className=" px-24 py-4 max-[650px]:px-4 max-[1250px]:px-16">
          <section
            className="  flex items-center gap-10 justify-center drop-shadow-lg py-6 px-8 max-[650px]:py-3
          max-[650px]:gap-3 max-[650px]:px-4
           rounded-3xl text-center bg-[#f3f3f3]"
          >
            <div className=" rounded-xl overflow-hidden max-[650px]:w-9/12">
              <img
                src={collection}
                alt=""
                className="w-full object-cover h-64 rounded-xl max-[650px]:h-32"
              />
            </div>
            <div className="  w-6/12 text-start font-Roboto flex flex-col gap-3 max-[650px]:gap-1.5 max-[650px]:text-xs">
              <h1 className="text-2xl  font-semibold max-[650px]:text-xl w-full">
                Collection
              </h1>
              <p className="w-full text-sm  tracking-wide min-[650px]:hidden">
                Tride of adding expense one by one ? Add all at once to a
                collection .{" "}
              </p>
              <p className="w-full text-[16px] tracking-wide max-[650px]:hidden ">
                Tired of adding expenses one by one? Add them all at once to a
                collection. Save time and effort, ensuring a comprehensive
                record of expenses for better management and analysis.
              </p>
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide className=" px-24 py-4 max-[650px]:px-4 max-[1250px]:px-16">
          <section
            className="  flex items-center gap-10 justify-center drop-shadow-lg py-6 px-8 max-[650px]:py-3
          max-[650px]:gap-3 max-[650px]:px-4
           rounded-3xl text-center bg-[#f3f3f3]"
          >
            <div className=" rounded-xl overflow-hidden max-[650px]:w-9/12">
              <img
                src={Clubs}
                alt=""
                className="w-full  object-cover h-64 rounded-xl max-[650px]:h-32"
              />
            </div>
            <div className="  w-6/12 text-start font-Roboto flex flex-col gap-3 max-[650px]:gap-1.5 max-[650px]:text-xs">
              <h1 className="text-2xl  font-semibold max-[650px]:text-xl w-full">
                Clubs
              </h1>
              <p className="w-full text-sm  tracking-wide min-[650px]:hidden">
                Split with the same people often ? Time to gang up !"
              </p>
              <p className="w-full text-[16px] tracking-wide max-[650px]:hidden ">
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
