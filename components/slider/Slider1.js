import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider1 = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          prevEl: ".custom_prev",
          nextEl: ".custom_next",
        }}
      >
        <SwiperSlide>
          <div className="px-3 pb-5">
            <div className="card-slider group">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                className="rounded-xl"
                src="/assets/imgs/placeholders/img-2.jpg"
                alt="Tatkrit"
              />
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                    <Link href="/services" legacyBehavior>
                      User growth
                    </Link>
                  </h1>
                  <p className="mt-2 text-xs text-gray-500">Harvard university</p>
                </div>
                <div>
                  <Link
                    href="/services"
                    className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-3 pb-5">
            <div className="card-slider group">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                className="rounded-xl"
                src="/assets/imgs/placeholders/img-3.jpg"
                alt="Tatkrit"
              />
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                    <Link href="/services" legacyBehavior>
                      Products
                    </Link>
                  </h1>
                  <p className="mt-2 text-xs text-gray-500">Cocacola., Co</p>
                </div>
                <div>
                  <Link
                    href="/services"
                    className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-3 pb-5">
            <div className="card-slider group">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                className="rounded-xl"
                src="/assets/imgs/placeholders/img-4.jpg"
                alt="Tatkrit"
              />
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                    <Link href="/services" legacyBehavior>
                      Event
                    </Link>
                  </h1>
                  <p className="mt-2 text-xs text-gray-500">Oxford university</p>
                </div>
                <div>
                  <Link
                    href="/services"
                    className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="px-3 pb-5">
            <div className="card-slider group">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                className="rounded-xl"
                src="/assets/imgs/placeholders/img-5.jpg"
                alt="Tatkrit"
              />
              <div className="flex justify-between items-end">
                <div>
                  <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                    <Link href="/services" legacyBehavior>
                      Shopping
                    </Link>
                  </h1>
                  <p className="mt-2 text-xs text-gray-500">Alibaba Co</p>
                </div>
                <div>
                  <Link
                    href="/services"
                    className="tracking-wide hover-up-2 mr-2 inline-block px-4 py-3 text-xs text-blue-500 font-semibold leading-none border border-blue-200 hover:border-blue-500 hover:text-white hover:bg-blue-500 rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
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

export default Slider1;
