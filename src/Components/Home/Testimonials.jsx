import { useState } from "react";
import OneImage from "../../assets/cd60dffb-1265-4ee5-9dae-9ae1f46e98d5.png";
import TwoImage from "../../assets/47d5aa15-e6dc-48fa-a37e-bd4f0c73d9e6.jpg";
import ThreeImage from "../../assets/1c6884d5-5270-491c-93f5-ffad59801fb0.jpg";
import FourImage from "../../assets/2228896a-5855-46aa-923a-7b2d9cde3060.png";
import FiveImage from "../../assets/57355156-51a0-44f6-9eda-c3a9a131adca.png";
import { BsCaretLeftFill } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";

const Testimonials = () => {
  const data = [
    {
      title: "SPORT",
      content:
        "You are now able to place bets across a variety of markets with the best odds, quickest payouts, and live broadcasts of matches and competitions from all over the globe.",
      image: OneImage,
    },
    {
      title: "CASINO",
      content:
        "Feel free to choose from hundreds of casino games from every category, Slots, Roulette, and even Live Casino. You will love high-quality graphics, high RTPs, and real-time dealers.",
      image: TwoImage,
    },
    {
      title: "ESPORTS",
      content:
        "Bet on the best cybersport events such as The International. Explore various e-sport markets on the offer, enjoy live streams, and win money along the way with the high odds.",
      image: ThreeImage,
    },
    {
      title: "ONLINE GAMES",
      content:
        "These online games are going to change the way you look at the casino experience. The action is thrilling and the potential returns are on par with the most advantageous offers.",
      image: FourImage,
    },
    {
      title: "SLOTS",
      content:
        "Pick from a wide variety of fair slot games. There are many kinds across different categories, including Megaways and Jackpot Slots, so everyone can find one according to their taste.",
      image: FiveImage,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalSlides = data.length;

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
    <div className="pt-[5%] pb-[15%] flex flex-col items-center overflow-hidden ">
      <div className="skew-x-[30deg] mx-auto  w-full md:w-min lg:w-min px-[10%] bg-black  py-2">
        <h3 className="transform skew-x-[-30deg]  md:text-3xl lg:text-5xl text-3xl text-commonYellow  py-2 whitespace-nowrap font-bold">
          TESTIMONIALS
        </h3>
      </div>

      {/* **Slider Container** */}
      <div className="flex flex-row  justify-center">
        <button
          onClick={prevSlide}
          className="   text-black opacity-50 rounded-full"
        >
          <BsCaretLeftFill className="w-16 h-auto" />
        </button>

        <div className="relative pt-14 w-[80%] md:w-[50%] lg:w-[900px] overflow-hidden  ">
          <div
            className="flex transition-transform duration-500 ease-in-out w-[100%] md:w-[110%]  h-[300px] md:h-[250px]   "
            style={{
              transform: `translateX(calc(-${currentIndex * 50}% 
                       
                        + ${
                            window.innerWidth < 640
                            ? "0px" // Mobile
                            : window.innerWidth < 1024
                            ? "50px" // Tablet
                            : window.innerWidth < 1280
                            ? "0px" // Laptop
                            : "0px" // Large Screens
                        }))`,
                        width: `${
                            window.innerWidth < 640
                              ? data.length * 40 // Mobile
                              : window.innerWidth < 1024
                              ? data.length * 30 // Tablet
                              : window.innerWidth < 1280
                              ? data.length * 20 // Laptop
                              : data.length * 20 // Large Screens
                          }%`,
              // width: `${data.length * 50}%`,
            }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="flex-none w-1/2 flex justify-center relative"
              >
                {/* Content Box (This part is inside overflow-hidden) */}
                <div
                  className={`bg-black text-white  p-6 rounded-lg shadow-lg transition-all duration-500`}
                  style={{
                    width: index === currentIndex ? "120%" : "90%",
                    height: index === currentIndex ? "220px" : "210px",
                  }}
                >
                  <div className="grid grid-cols-1">
                    
                    <div className="flex flex-col h-60 justify-center text-white md:p-6 rounded-lg">
                      <p className="text-xs lg:leading-2">{item.content}</p>
                    </div>
                  </div>
                </div>

                {/* Absolute Positioned Image (This part is OUTSIDE overflow-hidden) */}
                <div className="absolute -top-10  left-1/2 transform -translate-x-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="  text-black opacity-50 rounded-full"
        >
          <AiFillCaretRight className="w-16 h-auto" />
        </button>
      </div>

      <div className="flex justify-center items-center w-full max-w-md md:mt-8 ">
        {/* **Dots Navigation** */}
        <div className="flex gap-2 ">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                            ${
                              currentIndex === index
                                ? "bg-black"
                                : "bg-black opacity-50"
                            }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
