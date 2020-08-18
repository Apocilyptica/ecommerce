import React, { Component } from "react";

import { UnderlinedTitle, InfoTitle } from "./infoHelp";
import { connect } from "react-redux";

class OrderSummary extends Component {
  render() {
    const { className } = this.props;
    let subtotal = 0;
    let amtStickers = 0;
    this.props.cartProducts.map((cartProduct) => {
      subtotal += cartProduct.quantity * cartProduct.product.price;
      amtStickers += cartProduct.quantity;
    });
    let tax = Math.round((subtotal * 0.06 + Number.EPSILON) * 100) / 100;
    let taxShipping = tax + 0.0;
    let total = subtotal + taxShipping;
    return (
      <div className={`${className} order-summary`}>
        <UnderlinedTitle
          className="order-summary__title"
          title="Order Summary"
        />
        <InfoTitle
          className="order-summary__subtotal"
          title={`${amtStickers} stickers`}
          value={`$${subtotal}`}
        />
        <InfoTitle
          className="order-summary__tax-shipping"
          title="Taxes & Shipping"
          value={`$${taxShipping}`}
        />
        <InfoTitle
          className="order-summary__total info-title-green"
          title="Total"
          value={`$${total}`}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return { cartProducts };
}

OrderSummary = connect(mapStateToProps)(OrderSummary);

export default OrderSummary;
