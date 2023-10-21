import React from "react";
import sec5_img from "../images/sec5_img.png";

const Section5 = () => {
  return (
    <div id="chicken_grill">
      <div id="chicken_grill_info_container">
        <h1 className="section_title">chicken grill</h1>
        <p className="section_discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          saepe! Exercitationem suscipit eos nesciunt perferendis delectus
          beatae nemo, inventore fugiat!
        </p>
        <button className="btn">order now</button>
      </div>
      <div id="chicken_grill_img_container">
        <img src={sec5_img} className="sec_img" alt="" />
      </div>
    </div>
  );
};

export default Section5;
