import React from "react";

const TextContainer = ({ text }) => {
  return (
    <div className="text-container">
      <p>
        <b>
          {text}German Buddy mission is to help people settle into Germany with
          ease by providing them with a comprehensive bureaucratic checklist. We
          understand that navigating the bureaucratic processes of settling in a
          new country can be overwhelming, which is why our app offers a
          step-by-step guide to ensure that our users have everything they need
          to get started in Germany.{" "}
        </b>
      </p>
    </div>
  );
};

export default TextContainer;
