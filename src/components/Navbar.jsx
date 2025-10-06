import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const sideNavVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  const menuBackgroundVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 py-3 backdrop-blur-md shadow-lg z-50 transition-all duration-300 ease-in-out bg-gradient-to-r from-gray-900 to-gray-800 bg-opacity-70 lg:bg-gradient-to-r"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo / User Section */}
        <Link className="flex items-center" to="/">
          <motion.img
            src="/Images/lalit_patel.jpg"
            alt="Lalit Patel"
            width="40"
            height="40"
            className="rounded-full border-2 border-[#8a2be2] mr-2 shadow-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <motion.span
            className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#8a2be2] to-[#00ffff] hover:from-[#00ffff] hover:to-[#8a2be2] transition-colors duration-500"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Lalit Patel
          </motion.span>
        </Link>

        {/* Mobile Toggle Button */}
        <motion.button
          className="lg:hidden p-2 text-white border-none focus:outline-none z-[100]"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </motion.button>

        {/* Desktop Links */}
        <div
          className="hidden lg:flex lg:items-center lg:w-auto"
          id="navbarNav"
        >
          <motion.ul
            className="flex flex-col lg:flex-row lg:space-x-8 items-center"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                className="relative py-2 lg:py-0 w-full lg:w-auto"
                variants={itemVariants}
                whileHover={{ translateY: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  className={`relative text-white hover:text-[#00ffff] transition-colors duration-300 font-medium pb-1 group ${
                    isActive(item.path) ? "active-link" : ""
                  }`}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#00ffff] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
            <motion.li
              className="mt-4 lg:mt-0 lg:ml-8"
              variants={itemVariants}
              whileHover={{ translateY: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://drive.google.com/file/d/1VQRfgZcyr2woXsnQlp4QSARXkGb7k3Q6/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-5 py-2.5 font-medium rounded-full text-[#8a2be2] bg-transparent border-2 border-[#8a2be2] overflow-hidden group hover:bg-[#8a2be2] transition-colors duration-300 active:ring-2 active:ring-white"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Resume
                </span>
                <div className="absolute inset-0 bg-[#8a2be2] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </a>
            </motion.li>
          </motion.ul>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                variants={menuBackgroundVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                className="lg:hidden fixed top-20 left-0 h-auto w-64 bg-black bg-opacity-80 shadow-2xl rounded-r-3xl z-50"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                <motion.ul
                  className="flex flex-col items-center space-y-4 px-6 py-6"
                  initial="hidden"
                  animate="visible"
                  variants={sideNavVariants}
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item.name}
                      className="w-full text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block w-full text-white font-medium py-2 px-4 rounded-lg bg-transparent hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}

                  <motion.li
                    className="text-center mt-6"
                    variants={itemVariants}
                  >
                    <div className="relative inline-block w-fit mx-auto">
                      <a
                        href="https://drive.google.com/file/d/1VQRfgZcyr2woXsnQlp4QSARXkGb7k3Q6/view?usp=drivesdk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-5 py-3 font-medium rounded-full text-[#8a2be2] bg-transparent border-2 border-[#8a2be2] overflow-hidden group hover:bg-[#8a2be2] hover:text-white transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                          Resume
                        </span>
                        <div className="absolute inset-0 bg-[#8a2be2] rounded-full transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                      </a>
                    </div>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
