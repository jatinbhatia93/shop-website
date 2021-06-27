import React from "react";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import "./cart.css";
import { Button } from "primereact/button";

const Cart = (props) => {
  const cartList = props.data;
  // const getSubTotal = () => {
  //   let initialValue = 0;
  //   const sum = cartList.reduce(
  //     (accumulator, currentValue) =>
  //       accumulator + currentValue.quantity * currentValue.price,
  //     initialValue
  //   );
  //   return sum;
  // };

  // const getTotalItems = () => {
  //   let initialValue = 0;
  //   const sum = cartList.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue.quantity,
  //     initialValue
  //   );
  //   return sum;
  // };

  const enquirePricing = () => {
    const brandName = 'SBT';
    const mobileNumber = process.env.REACT_APP_MOBILE_NUMBER;
    let str = `Hi ${brandName}, \nWould like to get the pricing of these items:`
    cartList.forEach(item => {
      str+= `\n- ${item.name} (Qty: ${item.quantity})`;
    });
    const url = `https://wa.me/phone=${mobileNumber}?text=` + encodeURI(str) ;
    const anchor = document.createElement('a');
    anchor.id="whatsapp";
    anchor.href = url;
    anchor.target = "_blank";
    anchor.click();
  }

  return (
    <React.Fragment>
      <div className="flex-container gap-1rem width-100p p-pl-1 p-pr-1">
        <div className="your-shopping-cart">
          <Card>
            <h2>Your Shopping Cart</h2>
            <Divider className="p-mt-0 p-pt-0" />
            <div className="item-list">
            {cartList.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="p-d-flex width-100p postion-relative">
                    <div className="p-mt-0 p-p-0 width-20p">
                      <img
                        src={item.path}
                        className="cart-img"
                        alt={item.name}
                      />
                    </div>
                    <div className="p-p-1">
                      <div className="h3">{item.name}</div>
                      <div className="p-d-flex cart-details-container">
                        <div className="p-pt-2">
                          <span>Qty.</span> {item.quantity}
                        </div>
                        {/* <div className=""><span>Price: </span>{item.price} | </div>
                        <div className="p-d-inline-flex">
                          <span>Total: </span>
                          <i className="fas fa-rupee-sign text-sm p-mr-1"></i>
                          <span className="h3 text-md">
                            {item.price * item.quantity}
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <Divider className="p-mt-0 p-pt-0" />
                </React.Fragment>
              );
            })}
            </div>
          </Card>
        </div>
        {/* <div className="subtotal-card">
          <Card>
            <div className="p-grid p-align-center">
              <div className="p-col-6 p-text-center text-md">
                Subtotal of {getTotalItems()}{" "}
                {getTotalItems() > 1 ? "Items" : "Item"}:
              </div>
              <div className="p-col-6 p-text-left">
                <span>
                  <i className="fas fa-rupee-sign"></i>
                  <span className="h3 subtotal-text">{getSubTotal()}</span>
                </span>
              </div>
            </div>
          </Card>
        </div> */}
      </div>
      <div className="get-quote">
          <Button className="p-button width-100p" onClick={enquirePricing} label="GET PRICING"/>
        </div>
    </React.Fragment>
  );
};

export default Cart;
