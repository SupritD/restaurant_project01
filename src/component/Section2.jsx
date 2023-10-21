import React from "react";
import sec2_card1 from "../images/sec2_card1.png";
import sec2_card2 from "../images/sec2_card2.png";
import sec2_card3 from "../images/sec2_card3.png";
const Section2 = () => {
  return (
    <div id="best_seller">
      <div id="best_seller_info_container">
        <h1 className="section_title">best seller</h1>
        <p className="section_discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          saepe! Exercitationem suscipit eos nesciunt perferendis delectus
          beatae nemo, inventore fugiat!
        </p>
      </div>
      <div id="best_seller_card_container">
        <div className="card">
          <img src={sec2_card1} alt="" className="card_img" />
          <h2 className="card_title">title here</h2>
          <p className="card_discription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            reiciendis culpa eos cum iusto.
          </p>
        </div>
        <div className="card">
          <img src={sec2_card2} alt="" className="card_img" />
          <h2 className="card_title">title here</h2>
          <p className="card_discription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            reiciendis culpa eos cum iusto.
          </p>
        </div>
        <div className="card">
          <img src={sec2_card3} alt="" className="card_img" />
          <h2 className="card_title">title here</h2>
          <p className="card_discription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            reiciendis culpa eos cum iusto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
