"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Admissions = () => {
  return (
    <section id="admissions" className="bg-gradient-to-b from-white to-green-50 py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Side */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/admission.jpg"
            alt="Admissions at ZIT"
            width={500}
            height={400}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Join the <span className="text-green-600">ZIT Community</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Begin your journey toward a rewarding career in technology.  
            Our admission process is transparent, student-centered, and designed to help you achieve your dreams.
          </p>
          <ul className="text-gray-700 mb-8 space-y-2 text-sm md:text-base">
            <li>✅ Apply online within minutes</li>
            <li>✅ Choose from multiple departments and programs</li>
            <li>✅ Enjoy scholarships and mentorship opportunities</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Admissions;
