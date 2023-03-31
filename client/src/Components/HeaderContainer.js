import React from "react";
import Logo from "../Images/Logo.png";
import Image from "../Images/bgshape.png";

const HeaderContainer = () => {
  return (
    <div className="text-con">
      <div className="left-column">
        <img
          src={Logo}
          alt="Logo"
          width="100"
          height="100"
          className="d-inline-block align-top"
        />
        <h2>
          <b>German Buddy</b>
        </h2>
        <p> We help make your settling in Germany uncomplicated.</p>
        <button>Register Now</button>
      </div>
      <div className="right-column">
        <img src={Image} alt=".." />
        <img
          src="https://media-public.canva.com/YbKEU/MAE-U0YbKEU/1/tl.png"
          alt=".."
        />
      </div>
    </div>
  );
};

export default HeaderContainer;
