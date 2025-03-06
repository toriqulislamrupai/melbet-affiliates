import footerLogo from "../../assets/logo.4ac3cfad391ca3a059d5ca9cf6fdbf90.png";

const FooterLogoPart = () => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-4 ">
        <img
          src={footerLogo}
          alt=""
          className="w-full max-w-[150px]"
        />
        <div className="text-white flex flex-row gap-8 lg:gap-4 items-center">
          {/* instragam logo */}
          <span className="bg-white p-1 hover:bg-commonYellow rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="auto"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.5A4 4 0 0 0 3.5 7.5v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9Zm9.25 2.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V6.75a.75.75 0 0 1 .75-.75ZM12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 1.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" />
            </svg>
          </span>
          {/* Youtube logo */}
          <span className="bg-white rounded-full hover:bg-commonYellow  p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="auto"
              viewBox="0 0 24 24"
              fill="black"
            >
              <path d="M10 15.5v-7l6 3.5-6 3.5ZM2 7.75A5.75 5.75 0 0 1 7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5Zm1.5 0v8.5c0 2.356 1.894 4.25 4.25 4.25h8.5c2.356 0 4.25-1.894 4.25-4.25v-8.5c0-2.356-1.894-4.25-4.25-4.25h-8.5c-2.356 0-4.25 1.894-4.25 4.25Z" />
            </svg>
          </span>
          {/* linkedIn logo */}
          <span className=" bg-white rounded-full hover:bg-commonYellow ">
          <svg
      width="30"
      height="auto"
      viewBox="0 0 100 100"
      className="rounded-full  "
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="none" />
      <text
        x="50%"
        y="70%"
        fontFamily="Arial, sans-serif"
        fontSize="70"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
      >
        in
      </text>
    </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterLogoPart;
