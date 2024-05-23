import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33352F] border-x-transparent text-white">
      <div className="container p-12 flex justify-between ">
        <span>LOGO</span>
        <p className="text-slate-600">
          ALL rights reserved{" "}
          <a
            className="text-slate-600 hover:text-white"
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
