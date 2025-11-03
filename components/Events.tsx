"use client";
import { motion } from "framer-motion";
import { Calendar, Users, Trophy } from "lucide-react";
import React from "react";

const events = [
  {
    id: 1,
    title: "Tech Innovation Week 2025",
    date: "Nov 10–15, 2025",
    icon: <Trophy className="text-green-600 w-8 h-8" />,
    desc: "A week-long exhibition of student projects, hackathons, and workshops.",
  },
  {
    id: 2,
    title: "Freshers’ Orientation",
    date: "Oct 28, 2025",
    icon: <Users className="text-green-600 w-8 h-8" />,
    desc: "Welcome program for new students to explore ZIT culture and departments.",
  },
  {
    id: 3,
    title: "Career Fair & Internship Drive",
    date: "Dec 12, 2025",
    icon: <Calendar className="text-green-600 w-8 h-8" />,
    desc: "Meet top companies, connect with recruiters, and explore job opportunities.",
  },
];

const Events = () => {
  return (
    <section id="events" className="bg-gradient-to-b from-green-50 to-white py-20 px-6 md:px-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
      >
        Latest <span className="text-green-600">News & Events</span>
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-green-100"
          >
            <div className="flex justify-center mb-4">{event.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
            <p className="text-green-600 font-medium text-sm mb-3">{event.date}</p>
            <p className="text-gray-600 text-sm">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;
