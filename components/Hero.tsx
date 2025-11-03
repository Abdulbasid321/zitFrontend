// import React from 'react';
// import Image from 'next/image';

// const Hero = () => {
//   return (
//     <section className="flex flex-col-reverse md:flex-row px-6 pt-24 pb-16 bg-white justify-between items-center">
      
//       {/* Text Section */}
//       <div className="w-full md:w-1/2 text-center md:text-left">
//         <h1 className="text-4xl md:text-5xl text-gray-900 mb-6 font-extrabold leading-tight">
//           {/* Welcome to <span className="text-green-600">ZIT</span> <br /> */}
//           <span>Empowering Learning Like Never Before</span>
//         </h1>

//         <p className="text-base md:text-lg text-gray-600 mb-8">
//           Explore a wide range of courses, connect with top instructors, and unlock your potential today.
//         </p>
        

//         <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-start">
//           <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
//             Get Started
//           </button>
//           <button className="border border-green-500 text-green-600 px-6 py-3 rounded-md hover:bg-green-100 transition">
//             Learn More
//           </button>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
//         <Image
//           src="/images/log1.jpg"
//           alt="Hero Image"
//           width={500}
//           height={400}
//           className="shadow-lg object-cover rounded-full"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col-reverse md:flex-row px-6 md:px-12 pt-28 pb-20 bg-gradient-to-b from-white via-green-50 to-white justify-between items-center overflow-hidden">
      {/* ✅ Background Decorative Blurs */}
      <div className="absolute top-10 -left-10 w-72 h-72 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 -right-10 w-64 h-64 bg-green-200/40 rounded-full blur-3xl animate-pulse"></div>

      {/* ✅ Text Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 font-extrabold leading-tight">
          Empowering <span className="text-green-600">Innovation</span> in
          Technology Education
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-10">
          At <span className="font-semibold text-green-600">Zibeh Institute of Technology</span>, we equip you with the skills, mindset, and confidence to lead in the digital era.
        </p>

        <div className="flex flex-col gap-4 md:flex-row justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-3 rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-green-600 text-green-700 px-8 py-3 rounded-md hover:bg-green-50 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* ✅ Image Section */}
      <motion.div
        className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center z-10"
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative">
          <Image
            src="/images/log1.jpg"
            alt="Hero Image"
            width={480}
            height={480}
            className="rounded-full shadow-2xl object-cover border-4 border-white"
          />

          {/* Floating glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-green-400/40 blur-lg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
