import React from "react";
import sec3_img from "../images/sec3_img.png";
const Section3 = () => {
  return (
    <div id="oriental_taste">
      <div id="oriental_taste_img_container">
        <img src={sec3_img} className="sec_img" alt="" />
      </div>
      <div id="oriental_taste_info_container">
        <h1 className="section_title">oriental taste</h1>
        <p className="section_discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          saepe! Exercitationem suscipit eos nesciunt perferendis delectus
          beatae nemo, inventore fugiat!
        </p>
        <button className="btn">order now</button>
      </div>
    </div>
  );
};

export default Section3;
