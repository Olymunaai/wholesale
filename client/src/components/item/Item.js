import React, {Fragment} from 'react'
import "./item.css"
import stockInfo from "../../stockInfo/stockInfo"
import {useParams} from "react-router-dom"


const Item = () => {
    let { entry } = useParams();
    console.log(entry)
    const item = stockInfo.find((e) => e._id == entry);

    return (
        <div className="itemInfoContainer">
            <div className="itemPicTitle">
                <div className="itemPageImg">
                <img src={item.img} className="img"/>
                    {item.discount && (<h4 className="imgPricing"><span className="discountNumber">{item.discount}</span><span className="percent">%</span> off<br />RRP</h4>)}
                </div>
                <div className="titleAndPart">
                <h2 className="itemTitle">{item.name}</h2>
                <p className="partNumber">PART NO: {item.partNumber}</p>
                <div className="cost">
                    {item.priceLot ? (<Fragment> <h1 className="priceLot">{item.priceLot}</h1>
                    <h5 className="priceEach">Per Item:<span className="pricePerItem" style={{fontSize:"18px"}}>{item.priceEach}</span> Items in Joblot: {item.joblotSize}</h5></Fragment>)
                    : <h1 className="priceLot">{item.priceEach}</h1>}
                </div>
                </div>
                {item.discount && (<div className="priceSaving">
                <h4 className="percentBreakdown"><span className="discountNumber">{item.discount}</span><span className="percent">%</span> off<br />RRP</h4>
                </div>)}
             </div>

            <div className="itemInformation">
                <h5 className="forMoreInfo">If you'd like more information about this item or to learn about similar stock, please contact us on 01254 952524. To purchase this item, or to see a full selection of our current stock, please visit our FaceBook page, available below.</h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget massa quis elit convallis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis ante, scelerisque ut nulla sed, bibendum condimentum risus. Duis erat velit, mollis at lectus ut, placerat consectetur sapien. Fusce gravida mollis arcu ut accumsan. Mauris eu ante quis ipsum iaculis aliquet ac at turpis. Phasellus iaculis, neque a hendrerit lacinia, justo mauris lobortis lectus, et scelerisque libero augue vel felis. Nullam a ornare lacus. Praesent eu libero sed urna bibendum congue. Donec sed tincidunt felis, eget gravida velit. Donec est tortor, ullamcorper et nibh ut.
            </div>
        </div>
    )
}

export default Item 
