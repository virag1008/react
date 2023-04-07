import React from "react";
import './Cards.css'
import Images from "./Images";

function Cards( prop ){
    return (
        <>
        
            <div className="cards">
                <div className="card">
                    <Images imgsrc = {prop.src} />
                    <div className="card_info">
                        <span className="card_category"> A Netflix Original Series </span>
                        <h3 className="card_title"> {prop.sname}</h3>
                        <a href={prop.link} target='_blank' >
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cards;
