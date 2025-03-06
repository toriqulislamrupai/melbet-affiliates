import { useState, useRef, useEffect } from "react";
import { FiChevronsRight } from "react-icons/fi";
import skype from "../../assets/skype.9827c3d18de332eec5f7f3b22437cf34.svg";
import whatsapp from "../../assets/whatsapp.45fd7e7bb59174ba82c958366e9d0046.svg";
import telegram from "../../assets/telegram.5d5d82e0d036db817d393c097dc3a80c.svg";
import bgImage from '../../assets/honeycombs-right.56d7a03aeda8737d54ac806279459495.png';


const Registration = () => {
  const formFields = [
    { label: "First Name", type: "text", name: "firstName" },
    { label: "Last Name", type: "text", name: "lastName" },
    { label: "Email", type: "email", name: "email" },
    {
      label: "Messenger",
      type: "custom-select",
      name: "messenger",
      options: [
        { name: "Skype", image: skype },
        { name: "WhatsApp", image: whatsapp },
        { name: "Telegram", image: telegram },
      ],
    },
    {
      label: "Username",
      type: "text",
      name: "skype",
      placeholder: "username/phone number",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    messenger: "",
    skype: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMessengerSelect = (option) => {
    setFormData({ ...formData, messenger: option.name });
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-commonYellow relative overflow-hidden">
      <div className="py-4 flex flex-col space-y-3 items-center z-50  justify-center">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold">REGISTRATION</h3>
        <p className=" md:text-xl text-center lg:text-xl font-bold">
          Hello and welcome!  What is your name and how can we contact you?
        </p>
        <div className="p-4 flex flex-row  justify-center mr-[35%] md:mr-[20%] lg:mr-[10%]  gap-x-20 rounded-lg">
          <h2 className="text-[100px] lg:block md:block hidden text-right leading-[80px] font-bold items-center">
            <span className="text-[500px] leading-[400px]">1</span>
            <br /> STEP
          </h2>

          <form className="" onSubmit={handleSubmit}>
            {formFields.map((field, index) => (
              <div key={index} className="mb-3 relative">
                <p className="font-medium text-xs py-2">{field.label}*</p>

                {/* Custom Dropdown for Messenger */}
                {field.type === "custom-select" ? (
                  <div className="relative">
                    <div
                      className="w-[160%] p-4 bg-black text-white rounded flex justify-between items-center cursor-pointer relative"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <span className="flex items-center">
                        {formData.messenger ? (
                          <img
                            src={
                              field.options.find(
                                (opt) => opt.name === formData.messenger
                              )?.image
                            }
                            alt={formData.messenger}
                            className="w-6 h-6 mr-2 absolute left-4"
                          />
                        ) : null}
                        <span className="ml-8">
                          {formData.messenger || "Select Messenger"}
                        </span>
                      </span>
                      <span className="text-white">▼</span>
                    </div>

                    {dropdownOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute w-[160%] bg-black text-white rounded mt-1 shadow-md z-10"
                      >
                        {field.options.map((option, idx) => (
                          <div
                            key={idx}
                            className="flex items-center p-3 hover:text-black hover:bg-white cursor-pointer"
                            onClick={() => handleMessengerSelect(option)}
                          >
                            <img
                              src={option.image}
                              alt={option.name}
                              className="w-6 h-6 mr-2"
                            />
                            {option.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="w-[160%] p-4 text-white placeholder:text-white placeholder:opacity-50 outline-none bg-black rounded"
                    required
                    onFocus={(e) => {
                      if (formData[field.name] === "") {
                        e.target.nextElementSibling.style.opacity = "1"; // Show error message on focus
                      }
                    }}
                    onBlur={(e) => {
                      if (formData[field.name] === "") {
                        e.target.nextElementSibling.style.opacity = "0"; // Hide error message on blur
                      }
                    }}
                  />
                )}
                {formData[field.name] === "" && (
                  <p className="text-red  text-xs absolute left-0 opacity-0 transition-opacity duration-300">
                    Field should be filled in
                  </p>
                )}
              </div>
            ))}
            <div className="py-4">
              <button
                type="submit"
                className="bg-black w-[160%] hover:bg-white hover:text-black flex justify-center items-center text-white p-4 font-bold rounded"
              >
                NEXT
                <span>
                  <FiChevronsRight className="w-6 h-6" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <img src={bgImage} alt="" className="fixed lg:block md:hidden hidden top-0 z-5 opacity-30 right-0 w-80" />
    </div>
  );
};

export default Registration;
