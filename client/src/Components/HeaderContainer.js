import React from "react";
import Logo from "../Images/Logo.png";

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
        <img
          src="https://media-public.canva.com/YbKEU/MAE-U0YbKEU/1/tl.png"
          alt=".."
        />
        <img
          src="https://media-public.canva.com/hoVVg/MAEW7vhoVVg/1/tl.png"
          alt=".."
        />
      </div>
    </div>
  );
};

export default HeaderContainer;
