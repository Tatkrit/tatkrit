'use client'
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    image: "/assets/imgs/placeholders/img-1.png",
    quote: "Maecenas nibh purus, pharetra ac felis sed, elementum molestie urna. Nunc at arcu non ipsum auctor lacinia quis quis mi.",
    name: "Alice Bradley",
    position: "CEO, Co Founders"
  },
  {
    id: 2,
    image: "/assets/imgs/placeholders/img-1.png",
    quote: "Another amazing testimonial about our services and how we helped transform their business.",
    name: "John Smith",
    position: "Marketing Director"
  },
  {
    id: 3,
    image: "/assets/imgs/placeholders/img-1.png",
    quote: "Working with this team has been an incredible experience. Their dedication and expertise are unmatched.",
    name: "Sarah Johnson",
    position: "Product Manager"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Layout>
        <section className="py-20 pb-8 overflow-x-hidden">
          <div className="container">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0"
                    >
                      <div className="flex flex-wrap mb-24">
                        <div
                          className="relative w-full lg:w-1/2 h-128 mb-20 lg:mb-0 wow animate__animated animate__fadeIn"
                          data-wow-delay=".1s"
                        >
                          <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-blueGray-100 rounded-xl"></div>
                          <Image
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top"
                            src={testimonial.image}
                            alt={testimonial.name}
                          />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-24 my-auto">
                          <Image
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            src="/assets/imgs/icons/quote.svg"
                            alt="Quote"
                            className="wow animate__animated animate__fadeIn"
                            data-wow-delay=".2s"
                          />
                          <h2
                            className="my-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                            data-wow-delay=".3s"
                          >
                            {testimonial.quote}
                          </h2>
                          <p className="mb-1 text-lg">
                            <strong
                              className="text-blue-500 wow animate__animated animate__fadeIn"
                              data-wow-delay=".4s"
                            >
                              {testimonial.name}
                            </strong>
                          </p>
                          <p
                            className="text-gray-500 text-xs wow animate__animated animate__fadeIn"
                            data-wow-delay=".5s"
                          >
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows - Updated Position */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center space-x-4 z-10">
                <button
                  onClick={goToPrevSlide}
                  className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNextSlide}
                  className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-4 pb-4">
              <div
                className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="mx-auto"
                  src="/assets/imgs/logos/brands/brand-1.png"
                  alt="Tatkrit"
                />
              </div>
              <div
                className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="mx-auto"
                  src="/assets/imgs/logos/brands/brand-2.png"
                  alt="Tatkrit"
                />
              </div>
              <div
                className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="mx-auto"
                  src="/assets/imgs/logos/brands/brand-3.png"
                  alt="Tatkrit"
                />
              </div>
              <div
                className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
              >
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="mx-auto"
                  src="/assets/imgs/logos/brands/brand-4.png"
                  alt="Tatkrit"
                />
              </div>
              <div
                className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn"
                data-wow-delay=".9s"
              >
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="mx-auto"
                  src="/assets/imgs/logos/brands/brand-5.png"
                  alt="Tatkrit"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="pt-20 pb-12 xl:bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
        >
          <div className="container">
            <div className="max-w-lg mx-auto mb-12 text-center">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                className="mx-auto"
                src="/assets/imgs/icons/quote.svg"
                alt="Tatkrit"
              />
              <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">
                Our Customers Very Happy With Our Services
              </h2>
              <p className="text-blueGray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et
                iaculis.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".1s"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/avatar-1.png"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                      <p className="text-gray-500 text-xs mt-3">CEO, Co Founders</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5">
                    Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem.
                    Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/facebook-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>
                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/instagram-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".3s"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/avatar-2.png"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                      <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5">
                    Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem.
                    Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/facebook-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/instagram-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".5s"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/avatar-3.png"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                      <p className="text-gray-500 text-xs mt-3">Project-Manager</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5">
                    Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem.
                    Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/facebook-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/twitter-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".7s"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/avatar-4.png"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                      <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5">
                    Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem.
                    Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/facebook-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/instagram-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/twitter-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".7s"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/avatar-5.png"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                      <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5">
                    Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem.
                    Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/facebook-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/instagram-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/twitter-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".7s"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/avatar-6.png"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                      <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5">
                    Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem.
                    Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/facebook-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/instagram-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/twitter-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".3s"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/avatar-2.png"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                      <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5">
                    Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem.
                    Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/facebook-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/instagram-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 py-5 md:px-5">
                <div
                  className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                  data-wow-delay=".5s"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/avatar-3.png"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                      <p className="text-gray-500 text-xs mt-3">Project-Manager</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5">
                    Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem.
                    Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.
                  </p>
                  <div className="flex space-x-2">
                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/facebook-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>

                    <Link href="#">
                      <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src="/assets/imgs/icons/twitter-blue.svg"
                        alt="Tatkrit"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center pt-12">
              <Link
                className="hover-up-5 inline-block py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                href="#"
              >
                Show more Testimonials
              </Link>
            </div>
          </div>
        </section>
        {/* <section className="pb-20">
          <div className="container">
            <div className="max-w-2xl lg:max-w-3xl mx-auto">
              <div className="mb-12 text-center">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  Get in touch!
                </h2>
                <p
                  className="text-blueGray-400 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  We will be glad to hear from you
                </p>
              </div>
              <div className="flex flex-wrap -mx-3 text-center">
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-blueGray-400">Phone</span>
                    <p>+91 93137 41795 </p>
                  </div>
                </div>
                <div
                  className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".3s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-blueGray-400">E-mail</span>
                    <p>tatkritsolutions@gmail.com</p>
                  </div>
                </div>
                <div
                  className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  <svg
                    className="mb-6 h-8 w-8 mx-auto text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div className="leading-relaxed">
                    <span className="text-sm text-blueGray-400">Address</span>
                    <p>11567 E Broadview Dr</p>
                    <p>Colorado(CO), 80117</p>
                  </div>
                </div>
              </div>
              <div>
                <form>
                  <div
                    className="mb-4 text-sm wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".1s"
                  >
                    <span className="mr-4 font-semibold">Departament:</span>
                    <label className="mr-4">
                      <input className="mr-1" type="radio" name="department" value="1" />
                      <span>Support</span>
                    </label>
                    <label>
                      <input className="mr-1" type="radio" name="department" value="2" />
                      <span>Sales</span>
                    </label>
                  </div>
                  <div
                    className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".3s"
                  >
                    <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div>
                        <label className="flex px-2 bg-blueGray-50 rounded">
                          <input className="hidden" type="file" name="Choose file" />
                          <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                            {" "}
                            Browse
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                      <textarea
                        className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                        placeholder="Message..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <label>
                      <input className="mr-1" type="checkbox" name="terms" value="1" />
                      <span className="text-sm font-semibold">
                        I agree to terms and conditions.
                      </span>
                    </label>
                    <button
                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}
      </Layout>
    </>
  );
};

export default Testimonials;
