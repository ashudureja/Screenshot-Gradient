import React from "react";
import { Link } from "react-router-dom";

 function Hero1() {
  return (
    <section className="bg-gray-900 min-h-screen sm:p-16 p-6 flex items-center justify-center  text-white">
        
      <div className=" w-full  grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Section */}
        <div>
          <div className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-center sm:text-left">
            Create{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-300 bg-clip-text text-transparent">
              beautiful
            </span>
            ,<br />
             screenshots with ease.
          </div>

         <p className="text-lg text-center sm:text-left text-gray-300 mb-6">
  Gladly is a powerful tool that lets you apply beautiful gradient backgrounds
  and edit images for social media, product showcases, presentations, and more.
</p>


          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-6">
            <Link to="/editor" className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform duration-200">
              Get started 
            </Link >
            
          </div>

          <div className="flex items-center text-sm text-gray-400">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="user1"
                className="w-8 h-8 rounded-full border-2 border-gray-800"
              />
              <img
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="user2"
                className="w-8 h-8 rounded-full border-2 border-gray-800"
              />
              <img
                src="https://randomuser.me/api/portraits/men/13.jpg"
                alt="user3"
                className="w-8 h-8 rounded-full border-2 border-gray-800"
              />
            </div>
            <span className="ml-3">and thousands more that love Gradly.</span>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative  ">
          <div className="rounded-3xl overflow-hidden shadow-3xl border border-gray-700">
            <img
              src="./bg2.png"
              alt="Screenshot example"
              className="w-full h-full object-cover"
            />
          </div>
         <img
  src="https://wrap.so/airbnb.jpg"
  alt="Screenshot example"
  className="md:w-50 md:h-100 w-30 h-50 top-10 right-0 absolute object-cover rounded-3xl shadow-3xl border border-gray-700"
  style={{
    transform: 'perspective(1000px) rotateX(15deg) rotateY(-10deg)   rotateZ(4deg)',
    transformStyle: 'preserve-3d'
  }}
/>
        </div>
      </div>
    </section>
  );
}

export default Hero1