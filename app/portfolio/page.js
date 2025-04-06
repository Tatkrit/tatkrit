import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <Layout>
        <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
          <div className="container text-center">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              Our Portfolio
            </h1>
            <ul className="mx-auto text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
              <li className="inline-flex items-center">
                <Link href="#" className="hover:text-blue-500 text-gray-800">
                  Home
                </Link>

                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center text-gray-400">
                <span>Portfolio</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container">
            <div className="max-w-lg mx-auto mb-12 text-center">
              <span
                className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                Our Projects
              </span>
              <h2
                className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated"
                data-wow-delay=".3s"
              >
                Check Out <br />
                Our <span className="text-blue-500">Latest</span> Project
              </h2>
              <p
                className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated"
                data-wow-delay=".5s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et
                iaculis.
              </p>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6 lg:mb-0">
              <div className="w-full lg:w-1/2 flex flex-wrap px-3 mb-6 lg:md-0">
                <div
                  className="hover-up-5 w-1/2 h-64 pr-3 pb-3 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-10.jpg"
                    alt="Tatkrit"
                  />
                </div>
                <div
                  className="hover-up-5 w-1/2 h-64 pl-3 pb-3 wow animate__animated animate__fadeInanimated"
                  data-wow-delay=".2s"
                >
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-11.jpg"
                    alt="Tatkrit"
                  />
                </div>
                <div
                  className="hover-up-5 w-1/2 h-64 pr-3 pt-3 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".3s"
                >
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-12.jpg"
                    alt="Tatkrit"
                  />
                </div>
                <div
                  className="hover-up-5 w-1/2 h-64 pl-3 pt-3 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".4s"
                >
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-13.jpg"
                    alt="Tatkrit"
                  />
                </div>
              </div>
              <div
                className="hover-up-5 w-full lg:w-1/2 px-3 relative wow animate__animated animate__fadeIn animated"
                data-wow-delay=".6s"
              >
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="lg:h-128 w-full object-cover rounded"
                  src="/assets/imgs/placeholders/img-9.jpg"
                  alt="Tatkrit"
                />
                <div className="absolute text-center bg-white rounded card-label-center px-4 py-12">
                  <div className="w-full flex place-content-center">
                    <p className="capitalize font-bold text-2xl text-center">Web Design</p>
                  </div>
                  <div className="w-full flex place-content-cente">
                    <p className="font-sans text-center ext-white mt-5 mb-6">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eveniet rem
                      fugiat deserunt molestias.
                    </p>
                  </div>
                  <Link
                    href="/blog-single"
                    className="tracking-wide hover-up-2 inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div
                className="hover-up-5 w-full lg:w-1/2 px-3 order-last lg:order-first mt-6 lg:mt-0 relative wow animate__animated animate__fadeIn animated"
                data-wow-delay=".1s"
              >
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                  className="h-128 w-full object-cover rounded"
                  src="/assets/imgs/placeholders/img-9.jpg"
                  alt="Tatkrit"
                />
                <div className="absolute text-center bg-white rounded card-label-center px-4 py-12">
                  <div className="w-full flex place-content-center">
                    <p className="capitalize font-bold text-2xl text-center">CMS Development</p>
                  </div>
                  <div className="w-full flex place-content-cente">
                    <p className="font-sans text-center ext-white mt-5 mb-6">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eveniet rem
                      fugiat deserunt molestias.
                    </p>
                  </div>
                  <Link
                    href="/blog-single"
                    className="tracking-wide hover-up-2 inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded"
                  >
                    View details
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-wrap px-3">
                <div
                  className="hover-up-5 w-1/2 h-64 pr-3 pb-3 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".2s"
                >
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-10.jpg"
                    alt="Tatkrit"
                  />
                </div>
                <div
                  className="hover-up-5 w-1/2 h-64 pl-3 pb-3 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".3s"
                >
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-11.jpg"
                    alt="Tatkrit"
                  />
                </div>
                <div
                  className="hover-up-5 w-1/2 h-64 pr-3 pt-3 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".4s"
                >
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-12.jpg"
                    alt="Tatkrit"
                  />
                </div>
                <div
                  className="hover-up-5 w-1/2 h-64 pl-3 pt-3 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "auto", height: "auto" }}
                    className="h-full object-cover rounded"
                    src="/assets/imgs/placeholders/img-13.jpg"
                    alt="Tatkrit"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
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
                    <p>6</p>
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
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;
