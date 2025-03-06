import image1 from "../../assets/tkr.f2cb8b3151228e283e56813c19a42101.png";
import image2 from "../../assets/laliga.43d36154ab7ff0d0abc3e46d24e33413.png";
import image3 from "../../assets/atox.5fb1676093475c62757f87b43718edb5.png";
import { Link } from "react-router-dom";

const Partnership = () => {
  return (
    <div className="py-4">
        <div className="py-4">
        <div className=" md:skew-x-[30deg] lg:skew-x-[30deg]  mx-auto  w-full md:w-min lg:w-min px-[10%] bg-black  py-2">
        <h3 className="transform md:skew-x-[-30deg] lg:skew-x-[-30deg]  md:text-3xl text-center lg:text-5xl text-3xl text-commonYellow  py-2 whitespace-nowrap font-bold">
          PARTNERSHIP
        </h3>
      </div>
        </div>
      
      <hr className="border-t-8 border-black my-2" />
      <div className="grid grid-cols-3 items-center justify-items-center  bg-black py-[4%]">
        {[image1, image2, image3].map((image, index) => (
          <div key={index}>
            <img src={image} alt="" className={`w-auto ${index===2? 'w-10 md:w-16 lg:w-auto mx-auto':''}
            ${index===0? 'w-12 md:w-24 lg:w-auto ':''}`} />
          </div>
        ))}
      </div>
      <hr className="border-t-8 border-black my-2" />
      <div className="flex justify-center py-6">
        <Link to='/registration'>
        <button className="bg-black w-min whitespace-nowrap text-white hover:text-black text-center text-xl lg:text-2xl hover:bg-white font-bold px-28 py-4">
            JOIN IN
          </button>
        </Link>
     
      </div>
      
    </div>
  );
};

export default Partnership;
