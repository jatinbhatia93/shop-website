import React from "react";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import "./cart.css";

const Cart = (props) => {
  const cartList = props.data;
  const getSubTotal = () => {
    let initialValue = 0;
    const sum = cartList.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price)
        , initialValue
    )
    return sum;
  };

  const getTotalItems = () => {
    let initialValue = 0;
    const sum = cartList.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.quantity)
        , initialValue
    )
    return sum;
  };

  return (
    <React.Fragment>
      <div className="p-grid p-col-12">
        <div className="p-col-8">
          <Card>
            <h2>Your Shopping Cart</h2>
            <div className="p-grid p-pb-0 p-mb-0">
              <div className="p-col-2 p-offset-6 p-text-bold">Quantity</div>
              <div className="p-col-2 p-text-bold">Price</div>
              <div className="p-col-2 p-text-bold">Total</div>
            </div>
            <Divider className="p-mt-0 p-pt-0" />
            {cartList.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="p-grid">
                    <div className="p-col-2 p-mt-0 p-p-0">
                      <img src={item.path} className="cart-img" />
                    </div>
                    <div className="p-col-4 p-mt-4 p-p-0">{item.name}</div>
                    <div className="p-col-2 p-mt-4 p-p-0">{item.quantity}</div>
                    <div className="p-col-2 p-mt-4 p-p-0">{item.price}</div>
                    <div className="p-col-2 p-mt-4 p-p-0">
                      <i className="fas fa-rupee-sign text-sm p-mr-1"></i>
                      <span className="h3 text-md">
                        {item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                  <Divider className="p-mt-0 p-pt-0" />
                </React.Fragment>
              );
            })}
          </Card>
        </div>
        <div className="p-col-4 subtotal-card">
          <Card>
            <div className="p-grid p-align-center">
              <div className="p-col-6 p-text-center text-md">
                Subtotal of {getTotalItems()} { getTotalItems() > 1 ? 'Items' : 'Item'}:
              </div>
              <div className="p-col-6 p-text-left">
                <span>
                  <i className="fas fa-rupee-sign"></i>
                  <span className="h3 subtotal-text">{getSubTotal()}</span>
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
