import { useState } from "react";
import PropTypes from "prop-types";
import { BsCaretLeftFill } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";

const AdvantagesSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      {/* **Slider Container** */}
       <div className="relative mt-8 w-[80%] md:w-[50%] lg:w-[40%] ">
                      <div className="flex transition-transform duration-500 ease-in-out w-[80%] md:w-[110%] lg:w-[110%] h-[450px]  md:h-[250px] lg:h-[300px] "
                           style={{
                              transform: `translateX(calc(-${currentIndex * 100}% 
                              + ${
                                  window.innerWidth >= 768 && window.innerWidth < 1024 ? "120px" : "40px"
                                }))`,
                              //  width: `${data.length * 25}%`,
                                
                           }}>
      
                      
                      {slides.map((item, index) => (
                          <div
                              key={index}
                              className="flex-none w-full flex justify-center"
                          >
                              <div className={`bg-black text-white p-6 rounded-lg shadow-lg  ${index === currentIndex ? " opacity-100 " : " opacity-100"} transition-all duration-500 relative`}
                               style={{ width: index === currentIndex ? "120%" : "70%",
                                  // height: index === currentIndex ? "300px" : "360px"
                                }}
                              >
                                  
                                  <div className="grid    grid-cols-1   ">
                                  <img src={item.image} alt={item.title} className="    mx-auto  rounded-lg" />
                                  <h3 className="  leading-6 text-xl   font-bold">{item.title}</h3>
                                  <p className="py-4 text-sm ">{item.content}</p>
                                  </div>
                                  
                              </div>
                          </div>
                      ))}
                      </div>
                  </div>
      
                  {/* **Navigation Buttons** */}
                  <div className="flex justify-between items-center w-full max-w-md mt-8 ">
                      <button onClick={prevSlide} className="   text-black opacity-50 rounded-full">
                      <BsCaretLeftFill className="w-16 h-auto"/>
                      </button>
                      {/* **Dots Navigation** */}
                  <div className="flex gap-2 ">
                      {slides.map((_, index) => (
                          <button
                              key={index}
                              onClick={() => setCurrentIndex(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 
                                  ${currentIndex === index ? "bg-black" : "bg-black opacity-50"}`}
                          ></button>
                      ))}
                  </div>
                      <button onClick={nextSlide} className="  text-black opacity-50 rounded-full">
                      <AiFillCaretRight className="w-16 h-auto"/>
                      </button>
                  </div>
    </div>
  );
};

// **PropTypes Validation**
AdvantagesSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AdvantagesSlider;
