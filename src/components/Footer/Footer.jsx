import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            The world is yours <br />
            Happy clients,happy Homyz
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Our headquarter</span>
          <span className="secondaryText">Lebanon,Beirut:Cityrama-Zonebleu:Nicolas building</span>
          <div className="flexCenter f-menu">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
