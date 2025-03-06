import { useState } from "react";
import earningImage from "../../assets/honeycomb.c68784de28071a2432ed0b1793946e6b.png";
import basketballImage from "../../assets/basketball.02f4ab29c275febbe01f4a919d1faf94.png";
import casinoImage from "../../assets/rulette.b469778a7b64d9eef942f3609cad2174.png";
import sportImage from "../../assets/gamepads.c42e3fdb38bab86d58709a0c6c5e0fa4.png";
import onlineGames from "../../assets/laptop.a807dbf6c86018c1a659fc50dc911f76.png";
import slotImage from "../../assets/slot-machine.710610a9099c17edcdda801516b0dcab.png";
import { BsCaretLeftFill } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";

const Earning = () => {
    const data = [
        {
            title: "SPORT",
            content:
                "You are now able to place bets across a variety of markets with the best odds, quickest payouts, and live broadcasts of matches and competitions from all over the globe.",
            image: basketballImage,
        },
        {
            title: "CASINO",
            content:
                "Feel free to choose from hundreds of casino games from every category, Slots, Roulette, and even Live Casino. You will love high-quality graphics, high RTPs, and real-time dealers.",
            image: casinoImage,
        },
        {
            title: "ESPORTS",
            content:
                "Bet on the best cybersport events such as The International. Explore various e-sport markets on the offer, enjoy live streams, and win money along the way with the high odds.",
            image: sportImage,
        },
        {
            title: "ONLINE GAMES",
            content:
                "These online games are going to change the way you look at the casino experience. The action is thrilling and the potential returns are on par with the most advantageous offers.",
            image: onlineGames,
        },
        {
            title: "SLOTS",
            content:
                "Pick from a wide variety of fair slot games. There are many kinds across different categories, including Megaways and Jackpot Slots, so everyone can find one according to their taste.",
            image: slotImage,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(1);
    const totalSlides = data.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
    };

    return (
        <div className="py-6 relative min-h-screen flex flex-col items-center overflow-hidden">
            <h3 className="text-3xl w-full md:text-3xl lg:text-5xl  py-4 text-center bg-black text-commonYellow font-medium">
                SELECT A PRODUCT AND START EARNING
            </h3>
            <img
                src={earningImage}
                alt=""
                className="absolute md:top-24 lg:top-20 md:-left-10 lg:-left-1/4 w-[50%] z-10 hidden lg:block md:block"
            />

            {/* **Slider Container** */}
            <div className="relative mt-8 w-[80%] md:w-[50%] lg:w-[40%] ">
                <div className="flex transition-transform duration-500 ease-in-out w-[100%] md:w-[110%] lg:w-[110%] h-[360px] md:h-[250px] lg:h-[300px] "
                     style={{
                        transform: `translateX(calc(-${currentIndex * 100}% + ${
                            window.innerWidth >= 768 && window.innerWidth < 1024 ? "120px" : "0px"
                          }))`,
                        //  width: `${data.length * 25}%`,
                          
                     }}>

                
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex-none w-full flex justify-center"
                    >
                        <div className={`bg-black text-white p-6 rounded-lg shadow-lg  ${index === currentIndex ? " opacity-100 " : " opacity-60"} transition-all duration-500 relative`}
                         style={{ width: index === currentIndex ? "120%" : "70%",
                            // height: index === currentIndex ? "300px" : "360px"
                          }}
                        >
                            
                            <div className="grid   md:w-[50%] grid-cols-1   ">
                            <img src={item.image} alt={item.title} className="md:hidden block w-[80%] md:w-[50%] mx-auto  rounded-lg" />
                            <h3 className="md:text-4xl lg:text-5xl text-3xl text-center md:text-left font-bold">{item.title}</h3>
                            <p className="py-4 text-[11px] md:text-[10px] lg:text-base  md:leading-0 lg:leading-4">{item.content}</p>
                            </div>
                            <img src={item.image} alt={item.title} className="absolute hidden md:block md:-top-2 lg:-top-5 md:-right-6 lg:-right-16   lg:w-auto md:w-[50%] rounded-lg" />
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
                {data.map((_, index) => (
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

export default Earning;
