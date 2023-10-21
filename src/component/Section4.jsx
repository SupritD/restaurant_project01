import React from "react";

const Section4 = () => {
  return (
    <div id="statistic">
      <div id="statistic_info_container">
        <h1 className="section_title">statistic</h1>
        <p className="section_discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          ipsam maiores numquam exercitationem commodi similique tenetur?
          Sapiente delectus mollitia neque.
        </p>
      </div>
      <div id="statistic_card_container">
        <div className="statistic_card">
          <div className="card_info">
            <h3 className="statistic_card_count">123</h3>
            <p className="statistic_card_title">chef</p>
          </div>
        </div>
        <div className="statistic_card">
          <div className="card_info">
            <h3 className="statistic_card_count">100</h3>
            <p className="statistic_card_title">outlets</p>
          </div>
        </div>
        <div className="statistic_card">
          <div className="card_info">
            <h3 className="statistic_card_count">300</h3>
            <p className="statistic_card_title">menu</p>
          </div>
        </div>
        <div className="statistic_card">
          <div className="card_info">
            <h3 className="statistic_card_count">30</h3>
            <p className="statistic_card_title">country</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
