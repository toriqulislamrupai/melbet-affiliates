import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Instruction from "../Pages/Instructions/Instruction";
import News from "../Pages/News/News";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";
import Terms from "../Pages/Terms/Terms";
import Privacy from "../Pages/Privacy/Privacy";
import Cookies from "../Pages/Cookies/Cookies";


const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        
        
        { path: '/', element: <Home /> },
        { path: '/about', element: <AboutUs /> },
        { path: '/instruction', element: <Instruction /> },
        { path: '/news', element: <News /> },
        { path: '/registration', element: <Registration /> },
        { path: '/login', element: <Login /> },
        { path: '/forgetpassword', element: <ForgetPassword /> },
        { path: '/terms', element: <Terms /> },
        { path: '/privacy', element: <Privacy /> },
        { path: '/cookies', element: <Cookies /> },
        
  
        
       
        
  
  
      ],
    },
    
  
   
  ]);

export default router;