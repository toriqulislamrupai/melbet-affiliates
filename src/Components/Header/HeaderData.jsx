import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const HeaderData = ({ headerData }) => {
  const [activeTab, setActiveTab] = useState(null); // add state for active tab
  const location = useLocation();
  const navigate = useNavigate();

  const scrollableIndices = [1, 4];

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  const handleNavigation = (header, index) => {
    if (scrollableIndices.includes(index)) {
      const sectionId = header.link.split("#")[1];

      if (location.pathname !== "/") {
        navigate(`/#${sectionId}`);
        setTimeout(() => handleScroll(sectionId), 300);
      } else {
        handleScroll(sectionId);
      }
    } else {
      navigate(header.link);
      window.scrollTo({ top: 0, behavior: "auto" });
    }

    setActiveTab(index); // Update activeTab when a tab is clicked
  };

  return (
    <div className="text-base">
      <ul className="flex flex-row space-x-5">
        {headerData.map((header, index) => (
          <li
            key={index}
            className={`flex cursor-pointer items-center 
            ${activeTab === index ? "text-commonYellow font-bold" : ""} 
            hover:text-commonYellow`}
            onClick={() => handleNavigation(header, index)}
          >
            {scrollableIndices.includes(index) ? (
              <ScrollLink
                to={header.link.split("#")[1]} // ✅ Dynamic ID
                onClick={() => handleNavigation(header, index)}
              >
                {header.label}
              </ScrollLink>
            ) : (
              <RouterLink to={header.link}>{header.label}</RouterLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

HeaderData.propTypes = {
  headerData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HeaderData;
