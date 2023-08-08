"use client";
import React, { useState } from "react";
import BodyOfChat from "./BodyOfChat";
// import BodyOfChat from "./BodyOfChat";

const CahBot = () => {
  const [open, setOpen] = useState(false);

  const handelOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="chatBotHead ">
        {open ? (
          <BodyOfChat open={open} setOpen={setOpen} />
        ) : (
          <div className="chatBot  " onClick={handelOpen}>
            <i className="fa-solid fa-message text-white"></i>
          </div>
        )}
      </div>
    </>
  );
};

export default CahBot;
