"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="relative bg-gradient-to-b from-green-50 to-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* ✅ Image Side */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/about.jpg"
            alt="About ZIT"
            width={500}
            height={400}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* ✅ Text Side */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            About <span className="text-green-600">Zibeh Institute of Technology</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Founded with a vision to drive innovation and practical technology education, 
            Zibeh Institute of Technology (ZIT) is committed to producing creative, 
            industry-ready graduates who are equipped to solve real-world challenges.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our mission is to bridge the gap between theory and practice through 
            hands-on learning, cutting-edge research, and collaborations with 
            leading organizations in the tech industry.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
