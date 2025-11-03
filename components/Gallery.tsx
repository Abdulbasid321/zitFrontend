"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const images = [
  "/images/pic1.jpeg",
  "/images/pic2.jpeg",
  "/images/pic3.jpeg",
  "/images/pic4.jpeg",
  "/images/pic5.jpeg",
  "/images/pic5.jpeg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-white py-20 px-6 md:px-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
      >
        Campus <span className="text-green-600">Gallery</span>
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-xl shadow-md group"
          >
            <Image
              src={src}
              alt={`Gallery Image ${i + 1}`}
              width={400}
              height={300}
              className="object-cover w-full h-60 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-sm">
              ZIT Campus Life
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
