import React from "react";
import Logo from "../Images/Logo2.png";
import Image from "../Images/bgshape.png";

const HeaderContainer = () => {
  return (
    <div className="text-con">
      <div className="left-column">
        <img
          src={Logo}
          alt="Logo"

          className="d-inline-block"
        />
        <p> We help make your settling in Germany uncomplicated.</p>
        <button>Register Now</button>
      </div>
      <div className="image-container">
        <img
          src="https://media-public.canva.com/YbKEU/MAE-U0YbKEU/1/tl.png"
          alt=".."
        />
        </div>
      </div>
  );
};

export default HeaderContainer;
