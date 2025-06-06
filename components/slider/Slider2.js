"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider2 = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
        }}
        className="custom-class"
      >
        <SwiperSlide>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            className="rounded"
            src="/assets/imgs/placeholders/img-6.png"
            alt="Tatkrit"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            className="rounded"
            src="/assets/imgs/placeholders/img-7.png"
            alt="Tatkrit"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            className="rounded"
            src="/assets/imgs/placeholders/img-8.png"
            alt="Tatkrit"
          />
        </SwiperSlide>
      </Swiper>

      <div id="carausel-2-columns-1-arrows" className="flex">
        <span className="mr-4 text-blue-500 flex slick-arrow custom_prev">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            ></path>
          </svg>
        </span>
        <span className="text-blue-500 flex slick-arrow custom_next">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
};

export default Slider2;
