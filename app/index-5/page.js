import TextEffect from "@/components/elements/TextEffect";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

const Index5 = () => {
  return (
    <>
      <Layout>
        <section
          className="pb-8 bg-top bg-cover bg-no-repeat relative -mt-24 pt-24"
          style={{ backgroundImage: "url('/assets/imgs/backgrounds/intersect.svg')" }}
        >
          <div className="hidden md:block absolute top-0 left-0 mt-32">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
              className="h-64 lg:h-80 jump"
              src="/assets/imgs/illustrations/at_the_park.svg"
              alt="Tatkrit"
            />
          </div>
          <div className="hidden md:block absolute top-0 right-0 mt-32">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "auto", height: "auto" }}
              className="h-64 lg:h-80 jump"
              src="/assets/imgs/illustrations/delivered.svg"
              alt="Tatkrit"
            />
          </div>
          <div className="container">
            <div className="mt-12 mb-12">
              <div className="max-w-lg mx-auto mb-8 text-center">
                <span className="inline-block px-3 py-2 text-xs font-semibold bg-blue-200 text-blue-500 rounded-full uppercase">
                  New Event
                </span>
                <h2 className="text-3xl md:text-5xl mt-4 mb-4 font-bold font-heading">
                  <span>Exclusive </span>
                  <span className="text-blue-600">Agency </span>
                  <span>for technology solution.</span>
                </h2>
                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                  We are <strong className="text-blue-500">"Tatkrit"</strong>, a Creative Design{" "}
                  <span
                    className="typewrite d-inline text-brand"
                    data-period="3000"
                    data-type='["Web Agency", "Social Marketing" ]'
                  >
                    <TextEffect text1="Web Agency" text2="Social Marketing" />
                  </span>
                </div>
              </div>
              <div className="max-w-2xl mx-auto text-center">
                <div className="flex flex-wrap">
                  <div className="flex flex-1 mb-4 mr-4 px-4 rounded bg-blueGray-50">
                    <svg
                      className="h-6 w-6 my-auto mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                    <input
                      className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                      type="email"
                      placeholder="Type your e-mail"
                    />
                  </div>
                  <div className="flex flex-1 mb-4 lg:mr-4 px-4 rounded bg-blueGray-50">
                    <svg
                      className="h-6 w-6 my-auto mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <input
                      className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
                      type="email"
                      placeholder="Password"
                    />
                  </div>
                  <div className="w-full lg:w-auto">
                    <Link
                      className="block w-full py-4 px-6 mb-2 lg:w-auto text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                      href="#"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pb-4">
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

        <section className="py-12">
          <div className="container py-12 mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-3 order-1 md:order-0">
                <div className="max-w-md">
                  <h3
                    className="mb-4 text-3xl md:text-3xl font-bold font-heading wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    How we work?
                  </h3>
                  <p
                    className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo
                    et iaculis.
                  </p>
                  <ul>
                    <li className="py-4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        1
                      </span>
                      <span>Expand Your Reach</span>
                    </li>
                    <li className="py-4 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        2
                      </span>
                      <span>Annualized Growth</span>
                    </li>
                    <li
                      className="pt-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".11s"
                    >
                      <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                        3
                      </span>
                      <span>Book Your Providers</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="w-full md:w-1/2 px-3 order-0 md:order-1 mb-12 md:mb-0 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="sm:max-w-sm lg:max-w-full mx-auto"
                  src="/assets/imgs/illustrations/podcast.svg"
                  alt="Tatkrit"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="container">
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="flex flex-wrap lg:max-w-sm mx-auto">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="jump sm:max-w-sm lg:max-w-full mx-auto wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                  src="/assets/imgs/illustrations/tasks.svg"
                  alt="Tatkrit"
                />
              </div>
              <div className="w-full lg:w-auto">
                <div className="lg:pl-32">
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita
                        animi.
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
                      <h3 className="mb-2 text-xl font-semibold font-heading">Annualized Growth</h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita
                        animi.
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
                        Book Your Providers
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita
                        animi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="text-sm text-blueGray-400 wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  Contact Us
                </span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  We will <span className="text-blue-500">be glad</span> to hear from you!
                </h2>
              </div>
              <div>
                <form>
                  <div
                    className="mb-4 text-sm wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
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
                  <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <textarea
                      className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                  <div className="mb-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <label className="flex px-2 bg-blueGray-50 rounded">
                      <input className="hidden" type="file" name="Choose file" />
                      <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                        {" "}
                        Browse
                      </span>
                    </label>
                  </div>
                  <div
                    className="flex justify-between items-center wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <label>
                      <input className="mr-1" type="checkbox" name="terms" value="1" />
                      <span className="text-sm font-semibold">
                        I agree to terms and conditions.
                      </span>
                    </label>
                    <button
                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
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
        <section className="py-20 bg-blueGray-50">
          <div className="container">
            <div className="max-w-lg mx-auto mb-12 text-center">
              <span
                className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Our Team
              </span>
              <h2
                className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Meet our awesome team
              </h2>
              <p
                className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et
                iaculis.
              </p>
            </div>
            <div className="flex flex-wrap">
              <div
                className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <div className="px-6 py-10 bg-white shadow rounded">
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/img-1.png"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <p className="text-lg font-bold">Michael Jackson</p>
                      <p className="text-blue-600">CEO</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm">
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
              <div
                className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="px-6 py-10 bg-white shadow rounded">
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/img-2.jpg"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <p className="text-lg font-bold">Oprah Winfrey</p>
                      <p className="text-blue-600 text-sm">Head of Development</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm">
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
              <div
                className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="px-6 py-10 bg-white shadow rounded">
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/img-5.jpg"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <p className="text-lg font-bold">Leonardo</p>
                      <p className="text-blue-600 text-sm">Head of Operations</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm">
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
              <div
                className="w-full md:w-1/2 py-5 md:px-5 wow animate__animated animate__fadeIn"
                data-wow-delay=".7s"
              >
                <div className="px-6 py-10 bg-white shadow rounded">
                  <div className="flex items-center mb-4">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "auto", height: "auto" }}
                      className="h-16 w-16 rounded-full object-cover"
                      src="/assets/imgs/placeholders/img-6.png"
                      alt="Tatkrit"
                    />
                    <div className="pl-4">
                      <p className="text-lg font-bold">Jerry Seinfeld</p>
                      <p className="text-blue-600 text-sm">Head of Development</p>
                    </div>
                  </div>
                  <p className="leading-loose text-blueGray-400 mb-5 text-sm">
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
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index5;
