import { FaAndroid } from "react-icons/fa6";
import { Link } from "react-router-dom";
const FooterText = () => {
  const data = [
    { label: "Terms and Conditions", link: "/terms" },
    { label: "Privacy Policy", link:"/privacy"},
    { label: "Cookie Policy", link: "/cookies" },
    
  ];
  
  return (
    <div className="">
        
      <div className="flex flex-col items-center lg:items-start space-y-4 lg:space-y-0 relative">
        {data.map(
          (policy, index) => (
            <Link to={policy.link} key={index}>
            <p  className="text-white  cursor-pointer">
              {policy.label}
            </p>
            </Link>
            
          )
        )}
        <div className="flex flex-col lg:flex-row items-center text-white gap-2">
            
          <p>support@melbetaffiliates.com <span className="mx-2">|</span></p>
          
          <span className="bg-white rounded-full hover:bg-commonYellow ">
            <svg
              width="36"
              height="auto"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              {/* Background Circle */}
              <circle cx="128" cy="128" r="128" fill="none" />

              {/* Telegram Logo */}
              <path
                d="M187.363 84.746c-2.197 22.515-11.68 76.41-16.52 101.333-2.048 10.72-6.08 14.293-9.984 14.667-8.48.787-14.933-.507-23.36-6.507-13.013-8.96-20.32-14.613-32.107-23.36-14.187-9.973-4.96-15.413 3.093-24.32 2.133-2.24 39.04-35.787 39.787-38.72.093-.4.187-1.92-.8-2.667-.96-.747-2.347-.48-3.36-.267-1.387.293-23.467 14.933-66.24 44.88-6.293 4.48-11.947 6.613-16.96 6.4-5.6-.24-16.427-3.2-24.48-5.973-9.84-3.413-17.653-5.213-17.04-11.093.347-3.36 4.4-6.773 12.107-10.24 45.867-20.907 76.4-34.8 91.6-41.653 43.787-18.987 52.827-22.293 58.827-22.4 1.307-.027 4.24.32 6.187 1.92 1.6 1.333 2.08 3.093 2.293 4.373.213 1.28.48 4.16.267 6.507z"
                fill="black"
              />
            </svg>
          </span>
          <button className="lg:absolute lg:bottom-0 lg:-left-28 flex flex-row text-white items-center p-1 gap-1 border border-white hover:bg-commonYellow">
            Android
            <FaAndroid className="text-green"/>
            </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default FooterText;
