import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bgImage from '../../assets/honeycombs-right.56d7a03aeda8737d54ac806279459495.png';

const Login = () => {
  const formFields = [
    { label: "Username", type: "text", name: "userName" },
    { label: "Password", type: "password", name: "password" },
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
    <div className="bg-commonYellow min-h-screen overflow-hidden relative">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 justify-items-center justify-center  items-center pt-[5%]">
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
        <div className="mx-auto py-[2%] flex flex-col justify-center items-center w-[300px] md:w-[380px] lg:w-[380px]">
          <button
            type="submit" // Ensures that the form is submitted
            className="border-black border-2 flex justify-center mx-auto w-full rounded-lg hover:bg-white text-black hover:border-none text-3xl p-4 py-3 font-bold"
          >
            LOG IN
          </button>
          <div className="underline flex flex-row justify-between md:text-sm lg:text-base w-full mt-4">

            <Link to='/forgetpassword'>
            <p>Forget your password</p>
            </Link>
            <Link to='/registration'>
            <p>Registration</p>
            </Link>
            
          </div>
        </div>
      </form>
      <img src={bgImage} alt="" className="fixed lg:block md:hidden hidden top-0 z-5 opacity-30 right-0 w-80" />
    </div>
  );
};

export default Login;
