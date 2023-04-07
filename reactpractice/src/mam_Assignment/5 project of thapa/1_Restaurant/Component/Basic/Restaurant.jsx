import React from "react";
import "./style.css";
import Menu from "./MenuApi";
import Menucards from "./Menucards";
import { useState } from "react";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);

  function filterfun(category) {
    const filtercategory = Menu.filter((itemObj) => {
      return itemObj.category === category;
    });
    return setMenuData(filtercategory);
  }

  const uniqueList = [
    ...new Set(
      Menu.map((item) => {
        return item.category;
      })
    ),
  ]

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">

          { uniqueList.map((category, index) => {
            return  <button className="btn-group__item" key={index}
            onClick={() => { filterfun(category) }} > 
            {category}
          </button> 
          })}

          <button className="btn-group__item" onClick={() => {
            setMenuData(Menu) }}>  All </button>
        </div>
      </nav>

      <Menucards menuData={menuData} />

    </>
  );
};

export default Restaurant;
