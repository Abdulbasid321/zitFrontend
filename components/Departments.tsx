"use client";
import { motion } from "framer-motion";
import { Cpu, Atom, Network, BookOpen } from "lucide-react";
import React from "react";

const departments = [
  {
    id: 1,
    name: "Computer Science",
    icon: <Cpu className="text-green-600 w-10 h-10" />,
    desc: "Learn programming, software engineering, AI, and data science through real-world projects.",
  },
  {
    id: 2,
    name: "Software Engineering",
    icon: <Atom className="text-green-600 w-10 h-10" />,
    desc: "Master circuit design, embedded systems, and renewable energy technologies.",
  },
  {
    id: 3,
    name: "Networking & Cybersecurity",
    icon: <Network className="text-green-600 w-10 h-10" />,
    desc: "Develop skills to secure systems and design robust network infrastructures.",
  },
  {
    id: 4,
    name: "Business & Technology",
    icon: <BookOpen className="text-green-600 w-10 h-10" />,
    desc: "Blend innovation and management for the modern digital economy.",
  },
];

const Departments = () => {
  return (
    <section id="departments" className="bg-white py-20 px-6 md:px-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
      >
        Our <span className="text-green-600">Departments</span>
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {departments.map((dept, index) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-gradient-to-b from-green-50 to-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100"
          >
            <div className="flex justify-center mb-4">{dept.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.name}</h3>
            <p className="text-gray-600 text-sm">{dept.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Departments;
