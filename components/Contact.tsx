"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-green-50 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text and Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Get in <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Have questions about admissions, programs, or campus life?  
            We’d love to hear from you. Reach out to us anytime!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-green-600 w-6 h-6" />
              <span>ZIT Campus, State Low Cost, jos, Nigeria</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-green-600 w-6 h-6" />
              <span>+234 812 345 6789</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-green-600 w-6 h-6" />
              <span>info@zit.edu.ng</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white shadow-xl rounded-2xl p-8 border border-green-100"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Send Us a Message
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-3 rounded-md w-full shadow-md hover:shadow-lg transition-all"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Optional Map Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl overflow-hidden shadow-lg"
      >
        <iframe
          title="ZIT Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3435868449613!2d3.352852375758618!3d6.602230423904623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e3f59bfe65%3A0x52f593e88c4d5c42!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1695904041953!5m2!1sen!2sng"
          className="w-full h-64 border-0"
          loading="lazy"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Contact;
