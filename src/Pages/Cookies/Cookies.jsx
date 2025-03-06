import { useEffect } from "react";


const Cookies = () => {
const cookiesData =[
    {
        "title": "  INFORMATION STORED ON YOUR DEVICE",
        "clauses": [
          "When accessing our services, with your consent we may store information on your device. This information is referred to as ‘cookies’, which are small text files containing letters and numbers for recording your preferences. Cookies are stored on your device when you use our services while visiting our websites and online pages.\n",
          "We also use local shared objects or ‘flash cookies’. ‘Flash cookies’ are similar to browser cookies. They allow us to remember your visits across our sites.\n",
          "Neither cookies nor flash cookies can be used to access your device or use information on your computer.\n",
          "We only use cookies and ‘flash cookies’ for monitoring.\n",
          "We only use these methods to track your use of our services to record your preferences.\n",
          "Cookies help us monitor traffic to our site, improve our services, make it easier for you to access them and increase your interest in our services.\n",
          "We use flash cookies and other cookies to help us show you more relevant and targeted advertisements."
        ]
      },
      {
        "title": "STRICTLY NECESSARY COOKIES",
        "clauses": [
          "Strictly necessary cookies are used to allow users to navigate the website and use its features, such as accessing secure areas of the website or making financial transactions. Without these cookies, you would not be able to use our websites efficiently."
        ]
      },
      {
        "title": "THE REGISTRATION PROCESS",
        "clauses": [
          "These cookies will hold information collected during your registration and will allow us to recognize you as a customer and provide you with the services you require.",
          "We may also use this data to better understand your online interests and preferences and to constantly enhance your visits to our platforms and use of our services."
        ]
      },
      {
        "title": "OUR WEBSITE",
        "clauses": [
          "We use cookies to collect information for visitors to our website.",
          "Our servers use three different types of cookies:",
          "• 'Session-based' cookies: This type of cookie is only allocated to your computer for the duration of your visit to our website. A session-based cookie helps you navigate our website faster and, if you are a registered customer, allows us to give you information that is more relevant to you. This cookie automatically expires when you close your browser.",
          "• 'Persistent' cookies: This type of cookie will remain on your computer for a set period of time for each cookie. Flash cookies are also persistent.",
          "• 'Analytical' cookies: This type of cookie allows us to recognize and count the number of visitors to our site and see how visitors use our services. This helps us improve the way our sites work, for example, by ensuring you can log in and find what you are looking for easily.",
          "You make a decision and you always have a choice of whether to accept or decline cookies.",
          "Most web browsers automatically accept cookies, but, if you prefer, you can modify your browser settings to keep control over your cookies.",
          "You can use your web browser to:",
          "• delete all cookies;",
          "• block all cookies;",
          "• allow all cookies;",
          "• block third-party cookies;",
          "• clear all cookies when the browser is closed;",
          "• open a 'private browsing'/'incognito' session that allows you to browse the Internet without storing data locally;",
          "• install add-ons and plug-ins to extend browser options.",
          "Where can I find information about managing cookies:",
          "• Information about cookies in Internet Explorer",
          "• Information about cookies in Chrome",
          "• Information about cookies in Firefox",
          "• Information about cookies in Safari",
          "• Information about cookies in Opera"
        ]
      },
      {
        "title": "FLASH COOKIES",
        "clauses": [
          "You can modify your Flash Player settings to prevent the use of flash cookies. The settings manager of your Flash Player allows you to manage your preferences.",
          "If you choose to decline all cookies in the browser, unfortunately you will not be able to use some of the features and services on our websites, and some services will not work correctly, for example, we will not be able to save your chosen interface language."
        ]
      }
      
      
      
      
      

]
     useEffect(() => {
                window.scrollTo({ top: 0, behavior: "auto" });
              }, []);
    return (
       <div className="bg-commonYellow">
            <h2 className="text-black  text-2xl md:text-3xl lg:text-5xl uppercase text-center py-[4%] font-bold">
            Cookie Policy
      </h2>
      <div className="p-4">
        <h2 className="font-bold text-sm md:text-2xl md:px-[10%] lg:px-[10%] py-4 lg:text-2xl uppercase">Cookies</h2>
      {cookiesData.map((section, index) => (
        <div key={index} className="mb-6  md:px-[10%] lg:px-[10%]">
          <h2 className="font-bold text-sm md:text-2xl lg:text-2xl">{section.title}</h2>
          {section.clauses.map((clause, idx) => (
            <p key={idx} className="mt-2 font-medium leading-tight text-sm md:text-base lg:text-lg">{clause}</p>
          ))}
        </div>
      ))}
    </div>
        </div>
    );
};

export default Cookies;