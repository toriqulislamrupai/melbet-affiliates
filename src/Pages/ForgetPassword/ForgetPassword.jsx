import { useEffect, useState } from "react";
import bgImage from '../../assets/honeycombs-right.56d7a03aeda8737d54ac806279459495.png';


const ForgetPassword = () => {
    const formFields = [
        { label: "Username", type: "text", name: "userName" },
        { label: "Email", type: "email", name: "email" },
      ];
      const [formData, setFormData] = useState({
          userName: "",
          password: "",
        });
         const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Form Data:", formData); // Log form data when form is submitted
          };
          useEffect(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
          }, []);
    return (
        <div className="bg-commonYellow overflow-hidden min-h-screen ">
           <div className="py-4 flex flex-col space-y-3 items-center z-50  justify-center">
           <h3 className="text-2xl  md:text-2xl lg:text-5xl font-bold">FORGOT YOUR <br className=" md:hidden lg:hidden" />PASSWORD ?</h3>
        <p className="text-sm px-2 md:px-0 lg:px-0 md:text-base leading-tight md:leading-tight lg:leading-normal text-center lg:text-xl font-bold">
        Enter your email address and we will send you a new one.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 justify-items-center justify-center  items-center pt-[2%]">
                {formFields.map((field, index) => (
                  <div key={index} className="mb-3 relative md:-translate-x-20 lg:-translate-x-20">
                    <p className="font-medium text-xs py-2">{field.label}*</p>
        
                    {/* Input field for Username and Password */}
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      placeholder={field.label}
                      onChange={handleChange}
                      className={`w-[300px] md:w-[180%] lg:w-[180%] p-4 text-white placeholder:text-white placeholder:opacity-50  outline-none bg-black rounded`}
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
        
                    {/* Error message for empty fields */}
                    {formData[field.name] === "" && (
                      <p className="text-red text-xs absolute left-0 opacity-0 transition-opacity duration-300">
                        Field should be filled in
                      </p>
                    )}
                  </div>
                ))}
        
                {/* Submit Button inside the form */}
                <div className="mx-auto pt-[6%] flex flex-col justify-center items-center w-[300px] md:w-[380px] lg:w-[380px]">
                  <button
                    type="submit" // Ensures that the form is submitted
                    className="bg-black text-white flex justify-center mx-auto w-full rounded-lg hover:text-black hover:bg-white  hover:border-none text-xl p-4 py-3 font-bold"
                  >
                    RECOVER PASSWORD
                  </button>
                  
                </div>
              </form>
            <img src={bgImage} alt="" className="fixed lg:block md:hidden hidden top-0 z-5 opacity-30 right-0 w-80" />
            </div> 
        </div>
    );
};

export default ForgetPassword;