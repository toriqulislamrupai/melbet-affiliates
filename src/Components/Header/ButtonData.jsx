import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ButtonData = ({ languages, selectedLanguage, handleLanguageChange, buttons }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // ✅ Dropdown reference

  // ✅ Outside Click করলে Dropdown বন্ধ হবে
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // ✅ Event Listener যোগ করা হলো
    return () => document.removeEventListener("mousedown", handleClickOutside); // ✅ Cleanup
  }, []);

  return (
    <div className="text-base">
      <div className="flex space-x-4">
        {buttons.map((button, index) =>
          index === 2 ? (
            <div className="relative" key={index} ref={dropdownRef}> {/* ✅ Ref যোগ করা হলো */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`px-4 py-2 font-bold border  flex 
                           items-center  ${index==2 ?'px-0 py-[6px] rounded-b-none border border-commonYellow ':''} space-x-2 border-commonYellow 
                           text-white bg-transparent rounded`}
              >
                <div className="flex flex-row items-center">
                  <span className="">{languages.find(lang => lang.value === selectedLanguage)?.label || "EN"}</span>
                  <FaCaretDown className={`text-white transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                </div>
              </button>

              {/* ✅ Smooth Animation for Dropdown using Framer Motion */}
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 px-[20px] py-1 bg-black text-white  rounded-b-md  
                              border border-commonYellow  shadow-lg"
                  >
                    {languages.map((option, optIndex) => (
                      <motion.li
                        key={optIndex}
                        onClick={() => {
                          handleLanguageChange({ target: { value: option.value } });
                          setIsOpen(false);
                        }}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2, delay: optIndex * 0.05 }}
                        className="pr-[8px] hover:text-black hover:bg-commonYellow cursor-pointer"
                      >
                        {option.label}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link to={button.link} key={index}>
              <button
                onClick={button.action}
                className={`px-4 py-2 
                ${index === 1 ? "bg-commonYellow" : ""} 
                ${index === 0 ? "border hidden md:block lg:block border-commonYellow hover:bg-commonYellow" : ""} 
                text-white rounded`}
              >
                {button.label}
              </button>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

ButtonData.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default ButtonData;
