import React from 'react'
import "./cards.css"
import "./card.css"
import stockInfo from "../../stockInfo/stockInfo"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Cards = () => {

    return (
        <div className="cardContainer">

            {stockInfo.map((card) => (
            <div className="card">
            <div className="imgDiv">
                <img src={card.img} className="img"/>
                {card.discount && (<p className="discount"><span className="discountNumber">{card.discount}</span><span className="percent">%</span><br />off RRP</p>)}
            </div>
            <h1 className="itemName">{card.name}</h1>
            <div className="pricing">
                <h2 className="pricePerItem">{card.priceEach}</h2>
                {card.priceLot && <p className="pricePerJoblot">(<span style={{fontWeight:600}}>{card.priceLot}</span> per Joblot)</p>}
            </div>
            <p className="partNumber">PART NO: {card.partNumber}</p>

            <Link to={`/item/${card._id}`} className="">
                <span className="moreInfo">MORE INFORMATION</span>
            </Link>
            <br />
            <a href="#!" className="">
                <span className="addToCart">ADD TO CART</span>
            </a>
        </div>
             ) )} 
        
        </div>
    )
}

export default Cards
