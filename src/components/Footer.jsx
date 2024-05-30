import React from "react";
import Icons from "./Icons";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer className="bg-dark text-center text-white">
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
        
          {/* <!-- Linkedin --> */}
          <Icons href={"https://www.linkedin.com/in/juan-jose-giraldo-6a199520a/"} icon={"fab fa-linkedin-in"} />
        
          {/* <!-- Github --> */}
          <Icons href={"https://github.com/JuanJo5433"} icon={"fab fa-github"} />
        
        </section>

        {/* <!-- Section: Social media --> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2);" }}
      >
        <p className="text-white">
        ©CopyRight {year} - JuanJo543
        </p>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
