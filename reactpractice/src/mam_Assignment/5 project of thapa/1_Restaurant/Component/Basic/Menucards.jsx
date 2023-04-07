import React from "react";

const Menucards = ({ menuData }) => {
  return (
    <>
      <div className="descripto">
        {menuData.map((data) => {

          const {id, image, name, category, description} = data;

          return (
            <div className="card" key ={id}>
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author subtle"> {category} </span>
                <h2 className="Card- title"> {name} </h2>
                <span className="card-description subtle">{description}</span>
                <div className="card-read"> Read </div>

                <img src={image} alt="sweets-image" />

                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menucards;
