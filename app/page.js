"use client";
import CounterUp from "@/components/elements/Counterup";
import TextEffect from "@/components/elements/TextEffect";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = () => {
    const elements = document.getElementsByClassName("counterUp");
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  };

  useEffect(() => {
    handleScroll();
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);
  return (
    <>
      <Layout>
        <section className="hero-3">
          <div className="container">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-2/5 px-3">
                <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                    Exclusive Agency For <span className="text-blue-500">Technology </span>Provide
                    Solution
                  </h2>
                  <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                    We are <strong className="text-blue-500">Tatkrit</strong>, a Creative Design{" "}
                    <div className="typewrite d-inline text-brand">
                      <TextEffect text1="Web Agency" text2="Social Marketing" />
                    </div>
                  </div>
                  <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn mt-3 text-sm">
                    Helping you maximize operations management with digitization
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <Link
                    className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded wow animate__animated animate__fadeIn"
                    href="#key-features"
                  >
                    Key Features
                  </Link>
                  <Link
                    className="block sm:inline-block hover-up-2 py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                    href="#how-we-work"
                  >
                    How We Work?
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-3/5 px-3 mb-12 lg:mb-0">
                <div className="lg:h-128 flex items-center justify-center">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="lg:max-w-lg"
                    src="/assets/imgs/illustrations/work-tv.png"
                    alt="Tatkrit"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-between pt-8 pb-8">
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".2s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count counterUp">
                    {inViewport && <CounterUp end={950} duration={10} />}
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">Annual Partner</p>
                </div>
              </div>
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count counterUp">
                    {inViewport && <CounterUp end={58} duration={10} />}
                  </span>
                  <span className="sm:text-2xl font-bold font-heading"> k </span>
                  <p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                </div>
              </div>
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".6s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count counterUp">
                    {inViewport && <CounterUp end={500} duration={10} />}
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                </div>
              </div>
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".8s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count counterUp">
                    {inViewport && <CounterUp end={300} duration={10} />}
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">Research Work</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24">
          <div className="container">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="flex flex-wrap lg:max-w-sm mx-auto">
                <div
                  className="hover-up-5 w-1/2 md:w-1/3 lg:w-full mb-4 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="pt-10 pb-8 px-6 bg-white text-center rounded shadow border border-gray-100">
                    <div className="text-blue-500 mx-auto mb-4">
                      <svg
                        className="w-8 h-8 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="mb-2 font-bold font-heading">Looking for Creative</h3>
                    <p className="text-sm text-blueGray-400 leading-loose">
                      Crafting Custom Software Solutions for Your Unique Needs.
                    </p>
                  </div>
                </div>
                <div
                  className="hover-up-5 w-1/2 md:w-1/3 lg:w-full wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="pt-10 pb-8 px-6 bg-white text-center rounded shadow border border-gray-100">
                    <div className="text-blue-500 mx-auto mb-4">
                      <svg
                        className="w-8 h-8 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="mb-2 font-bold font-heading">Project Initialization</h3>
                    <p className="text-sm text-blueGray-400 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    {/* <h3 className="mb-2 font-bold font-heading">Scalable Architecture</h3>
                    <p className="text-sm text-blueGray-400 leading-loose">
                    Solutions designed to grow with your business, ensuring scalability and seamless integration with future technology.
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-auto">
                <div className="lg:pl-16">
                  <div className="mb-4">
                    <span
                      className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeIn"
                      data-wow-delay=".1s"
                    >
                      Why choose us
                    </span>
                    <h2
                      className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      Key Features
                    </h2>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">Expand Your Reach</h3>
                      <p className="text-blueGray-400 leading-loose">
                      Expand your reach by leveraging innovative solutions that connect you with a broader audience.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".7s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      {/* <h3 className="mb-2 text-xl font-semibold font-heading">Annualized Growth</h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita
                        animi.
                      </p> */}
                      <h3 className="mb-2 text-xl font-semibold font-heading">Custom Software Solutions</h3>
                      <p className="text-blueGray-400 leading-loose">
                      Tailored applications designed to meet the specific needs of your business, from concept to deployment.
                      </p>
                      
                    </div>
                  </div>
                  <div
                    className="flex items-start py-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".9s"
                  >
                    <div className="w-8 mr-5 text-blue-500">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold font-heading">
                      Fast Turnaround Time
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                      Efficient development processes that minimize time to market without compromising on quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-20 xl:bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
          id="how-we-work"
        >
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                  <span>We are </span>
                  <span className="text-blue-500">awesome team </span>
                  <br />
                  <span>for your business dream</span>
                </h2>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">
                We are a skilled team committed to transforming your business vision into reality with cutting-edge software solutions. Our expertise and dedication help you create a digital future that drives success.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center">
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="p-12 bg-white shadow rounded">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    1
                  </div>
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/eating.svg"
                    alt="Tatkrit"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">Project Initialization</h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    Project initiation ensures that you lay a strong foundation for a new project in
                    your company our team.
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="p-12 bg-white shadow rounded">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    2
                  </div>
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/space.svg"
                    alt="Tatkrit"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">Project planning</h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    A project plan is essential to keep everything related to the project organized,
                    methodical, and on track.
                  </p>
                </div>
              </div>
              <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                <div
                  className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    3
                  </div>
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/tasks.svg"
                    alt="Tatkrit"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">Project organization</h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    Moving forward you will be able to keep yourself and your team on track, and
                    address challenges early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 mt-12" id="key-features">
          <div className="container">
            <div className="max-w-lg mx-auto mb-12 text-center">
              <h2
                className="my-2 text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                We Consultant to Get <br />
                <span className="text-blue-500">Our Business</span> Plan
              </h2>
              <p
                className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Business solution company sit our any how site used the our company any site us
                it-solve theme is very professional
              </p>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">IT Consultancy</h3>
                  <p className="text-sm text-blueGray-400">
                    We believe brand interaction is key to communication. Real innovations and
                    positive customer experience are the heart of success.
                  </p>
                </div>
              </div> */}
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Web Development</h3>
                  <p className="text-sm text-blueGray-400">
                  We believe intuitive design is key to impactful web development. Innovation and exceptional user engagement drive the success of every website.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">App Development</h3>
                  <p className="text-sm text-blueGray-400">
                  We believe user-centric design is key to successful app development. Innovation and seamless functionality ensure exceptional user experiences.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-8">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Digital Marketing</h3>
                  <p className="text-sm text-blueGray-400">
                  We believe strategic engagement is key to effective digital marketing. Innovation and meaningful connections drive impactful brand growth.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Right Solutions</h3>
                  <p className="text-sm text-blueGray-400">
                  We believe tailored solutions are key to achieving success. Innovation and precision drive impactful and lasting results.
                  </p>
                </div>
              </div>
              {/* <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Responsive Site</h3>
                  <p className="text-sm text-blueGray-400">
                    We believe brand interaction is key to communication. Real innovations and
                    positive customer experience are the heart of success.
                  </p>
                </div>
              </div> */}
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Clean Design</h3>
                  <p className="text-sm text-blueGray-400">
                  We believe simplicity is key to clean design. Innovation and clarity create impactful and visually appealing experiences.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                <div
                  className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn"
                  data-wow-delay=".9s"
                >
                  <div className="text-blue-500 mx-auto mb-4">
                    <svg
                      className="w-8 h-8 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold font-heading">Process Research</h3>
                  <p className="text-sm text-blueGray-400">
                  Understanding is key to effective process research. Innovation and detailed analysis lead to informed and successful strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section
          className="py-20 xl:bg-contain bg-top bg-no-repeat"
          style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}
        >
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated">
                <span>Choose Your </span>
                <br />
                <span className="text-blue-600">Best </span>
                <span> Pricing Plan</span>
              </h2>
              <p
                className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".3s"
              >
                Great Things In Business Are Never Done By One Person
              </p>
            </div>
            <div className="flex flex-wrap sm:justify-center mb-10">
              <label
                className="flex items-center mr-8 mb-2 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".3s"
              >
                <input type="radio" name="billing" value="1" />
                <span className="mx-2 font-semibold">Monthly Billing</span>
                <span className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">
                  $59
                </span>
              </label>
              <label
                className="flex items-center mb-2 wow animate__animated animate__fadeIn animated"
                data-wow-delay=".5s"
              >
                <input type="radio" name="billing" value="2" />
                <span className="mx-2 font-semibold">Annual Billing</span>
                <span className="inline-flex items-center justify-center w-12 h-10 bg-blue-500 text-white font-semibold rounded">
                  $99
                </span>
              </label>
            </div>
            <div className="flex flex-wrap bg-white rounded shadow wow animate__animated animate__fadeIn animated">
              <div className="w-full md:w-1/2 lg:w-2/5 px-3">
                <div className="p-8 text-center">
                  <span className="text-blueGray-400">Sign In</span>
                  <h4 className="mb-6 text-2xl">Setup your payment</h4>
                  <div className="flex mb-4 px-4 bg-blueGray-100 rounded">
                    <input
                      className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                      type="email"
                      placeholder="name@email.com"
                    />
                    <svg
                      className="h-6 w-6 ml-4 my-auto text-blueGray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex mb-6 px-4 bg-blueGray-100 rounded">
                    <input
                      className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                      type="password"
                      placeholder="Enter your password"
                    />
                    <button className="ml-4">
                      <svg
                        className="h-6 w-6 my-auto text-blueGray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="text-left mb-5 text-sm text-blueGray-400">
                    <label>
                      <input type="checkbox" name="terms" value="1" />
                      <span className="ml-1">I agree to terms and conditions.</span>
                    </label>
                  </div>
                  <button className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded">
                    Purchase now
                  </button>
                </div>
              </div>
              <div className="relative w-full md:w-1/2 lg:w-3/5 px-3 bg-blue-500 rounded-r overflow-hidden">
                <div className="max-w-sm px-12 pt-12">
                  <span className="text-xs text-blue-200">Various Analysis Options</span>
                  <h3 className="mb-4 text-4xl font-bold font-heading text-white">
                    Techno Provides Realtime Best Data Solutions.
                  </h3>
                </div>
                <div className="absolute right-0 bottom-0">
                  <div className="flex items-center h-full">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-80"
                      src="/assets/imgs/illustrations/online-shopping.png"
                      alt="Tatkrit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section
          className="py-20 bg-top bg-no-repeat"
          style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}
        >
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
                    <p>+91 93137 41795</p>
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
                {/* <div
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
                </div> */}
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
                      <input className="mr-1 " type="radio" name="department" value="2" />
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
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 border border-blue-600 rounded outline-none"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none border border-blue-600"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none border border-blue-600"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                      {/* <div>
                        <label className="flex px-2 bg-blueGray-50 rounded">
                          <input className="hidden" type="file" name="Choose file" />
                          <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                            {" "}
                            Browse
                          </span>
                        </label>
                      </div> */}
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                      <textarea
                        className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none border border-blue-600"
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
        </section>
      </Layout>
    </>
  );
};

export default Home;
