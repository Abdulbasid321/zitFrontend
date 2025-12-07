// 'use client';
// import Link from 'next/link';
// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react'; // Make sure lucide-react is installed

// const Nav = () => {
//     const [showDropdown, setShowDropdown] = useState(false);

//     const links = [
//         { id: 1, title: 'Gallery', url: '/' },
//         { id: 2, title: 'Contact', url: '/' },
//         { id: 3, title: 'Team', url: '/' },
//         { id: 4, title: 'About', url: '/' },
//     ]; 
//     return (
//         <nav
//             style={{ fontFamily: 'cursive' }}
//             className="flex justify-between items-center w-full px-8 py-5 shadow-md fixed top-0 left-0 z-50 bg-white"
//         >
//             {/* Logo */}
//             <div className="flex-1">
//                 <Link href="/"> 
//                     <h1 className="font-bold text-md md:text-2xl">ZIT</h1>
//                 </Link>
//             </div>  

//             {/* Navigation Links */}
//             <div className="hidden md:flex justify-center flex-1 gap-6">
//                 {links.map(link => (
//                     <Link
//                         className="text-gray-900 hover:text-green-500 transition font-semibold"
//                         href={link.url}
//                         key={link.id}
//                     >
//                         {link.title}
//                     </Link>
//                 ))}
//             </div>

//             {/* Login Dropdown */}
//             <div className="flex-1 flex justify-end relative">
//                 <button
//                     onClick={() => setShowDropdown(prev => !prev)}
//                     className="flex items-center gap-2 font-semibold py-2 px-6 rounded-md bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                     Login
//                     <ChevronDown className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} size={18} />
//                 </button>

//                 {showDropdown && (
//                     <div className="absolute top-full mt-2 right-0 w-48 bg-white border rounded-md shadow-lg z-50 animate-fade-in">
//                         <Link
//                             href="/adminLogin"
//                             className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
//                         >
//                             Admin Login
//                         </Link>
//                         <Link
//                             href="/studentLogin"
//                             className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
//                         >
//                             Student Login
//                         </Link>
//                         {/* <Link
//                             href="/teacherLogin"
//                             className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
//                         >
//                             Teacher Login
//                         </Link> */}
//                         {/* <Link
//                             href="/parentsLogin"
//                             className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
//                         >
//                             Parent Login
//                         </Link> */}
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Nav;


'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

//   const links = [
//     { id: 1, title: 'Home', url: '/' },
//     { id: 2, title: 'About Us', url: '/about' },
//     { id: 3, title: 'Departments', url: '/departments' },
//     { id: 4, title: 'Admissions', url: '/admissions' },
//     { id: 5, title: 'Gallery', url: '/gallery' },
//     { id: 6, title: 'News & Events', url: '/news' },
//     { id: 7, title: 'Contact', url: '/contact' },
//   ];
const links = [
  { id: 1, title: 'Home', url: '#hero' },
  { id: 2, title: 'About Us', url: '#about' },
  { id: 3, title: 'Departments', url: '#departments' },
  { id: 4, title: 'Admissions', url: '#admissions' },
  { id: 5, title: 'Gallery', url: '#gallery' },
  { id: 6, title: 'News & Events', url: '#events' },
  { id: 7, title: 'Contact', url: '#contact' },
];

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 px-6 md:px-12 py-4 font-[Poppins]"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-extrabold text-green-600 tracking-wide">
          ZIT<span className="text-gray-800">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.div
              whileHover={{ y: -2 }}
              key={link.id}
            >
              <Link
                href={link.url}
                className="text-gray-800 font-medium hover:text-green-600 transition-colors duration-200"
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Login Dropdown */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="flex items-center gap-2 font-semibold py-2 px-6 rounded-md bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Login
            <ChevronDown
              className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
              size={18}
            />
          </button>

          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 right-0 w-48 bg-white border rounded-md shadow-xl z-50"
              >
                <Link
                  href="/adminLogin"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                >
                  Admin Login
                </Link>
                <Link
                  href="/studentLogin"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                >
                  Student Login
                </Link>
                {/* <Link
                  href="/teacherLogin"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
                >
                  Lecturer Login
                </Link> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu((prev) => !prev)}
          className="md:hidden text-gray-800"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-4 flex flex-col gap-4 bg-white shadow-lg p-4 rounded-lg"
          >
            {links.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                onClick={() => setMobileMenu(false)}
                className="text-gray-700 font-medium hover:text-green-600 transition"
              >
                {link.title}
              </Link>
            ))}
            <hr />
            <div className="flex flex-col gap-2">
              <Link
                href="/adminLogin"
                onClick={() => setMobileMenu(false)}
                className="text-sm text-gray-700 hover:text-green-600"
              >
                Admin Login
              </Link>
              <Link
                href="/studentLogin"
                onClick={() => setMobileMenu(false)}
                className="text-sm text-gray-700 hover:text-green-600"
              >
                Student Login
              </Link>
              <Link
                href="/teacherLogin"
                onClick={() => setMobileMenu(false)}
                className="text-sm text-gray-700 hover:text-green-600"
              >
                Lecturer Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;

