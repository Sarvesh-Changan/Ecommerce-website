import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  I'm extremely satisfied with my purchase! The website is user-friendly, making it easy to find exactly what I needed. The checkout process was smooth, and I appreciated the multiple payment options. My order arrived quickly and was well-packaged. Customer service was responsive and helpful when I had a question. I highly recommend this site for anyone looking for a hassle-free shopping experience!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Sarvesh Vijay Changan
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Senior Product Designer
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  I had a great experience shopping on this website. The product descriptions were detailed, and the photos were accurate, so I knew exactly what I was getting. The prices are competitive, and I found some great deals. Shipping was faster than expected, and the items arrived in perfect condition. I also loved the variety of products available. Definitely will shop here again!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  React Js
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  UI Develeoper
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://webknudocs.vercel.app/logo/react.png"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  This is my go-to e-commerce site! The interface is intuitive, and the search function works flawlessly, helping me find what I need in seconds. I was impressed by the wide range of products and the quality of everything I've ordered so far. The customer service team was friendly and resolved my issue quickly. Plus, the fast shipping and secure packaging make the entire process stress-free. Highly recommended!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  React Js
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  CTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
