import React from 'react'
import ProtoType from 'prop-types'
export default function Cart(props) {
  return (
    <div className="card " id="card">
        <img src={props.imageAddress} className="card-img-top" alt="Bage" id='card_img'/>
        <div  id="cart_price">
            <h7 className="card-title" >₹{props.discount}533 <strike>₹{props.orignalPrice}</strike></h7>
            <p className="card-text" id="card_details">{props.addDescription}.</p>
        </div>
        <div id="cart_button">
            <p>Add the item</p>
            <i class="bi bi-cart4"></i>
        </div>
    </div>
  )
}
Cart.prototype={
    discount:ProtoType.number,
    orignalPrice:ProtoType.number,
    addDescription:ProtoType.string
}
