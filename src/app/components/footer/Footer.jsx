import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33352F] border-x-transparent text-white">
      <div className="container p-12 flex justify-between ">
        <span className="text-xl font-semibold text-white animate-pulse">
          jorge felipe
        </span>
        <p className="text-slate-600">
          Build With NextJS ALL rights reserved{" "}
          <a
            className="text-slate-600 hover:text-secondary-600 animate-pulse"
            href="https://github.com/livehass"
          >
            {" "}
            Livehass®{" "}
          </a>
          2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
