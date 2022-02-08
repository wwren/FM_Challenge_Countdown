import React from "react";
import Footer from "./Footer";
import "./Canvas.css";
import Clock from "./Clock";
function Canvas() {
  return (
    <>
      <div className="background">
        <Clock />
      </div>
    </>
  );
}

export default Canvas;
