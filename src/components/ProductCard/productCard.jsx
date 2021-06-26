import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Dropdown } from 'primereact/dropdown';
import "./productCard.css";

const ProductCard = (props) => {
  let [quantity, onQuantityChange] = useState('');
  const maxQuantity = 50;
  const items = Array.from({ length: maxQuantity }).map((_, i) => ({ label: i+1, value: i+1 }));
 
  const onQtyChange = (e) => {
    onQuantityChange(e.value);
  }

  const onDelete = () => {
    onQuantityChange(0);
    props.onDelete(props.product, 0);
  }

  const qtyDropdown = (
    <Dropdown value={quantity} options={items} onChange={onQtyChange} placeholder="1" className="p-mr-2" />
  )

  const header = (
    <img
      alt={props.product.name}
      src={props.product.path}
      className="product-img"
    />
  );

  const getCartButtons = () => {
    if (props.product.quantity) {
      return (
        <React.Fragment>
          {qtyDropdown}
          <Button 
            label="Update Qty."
            style={{ marginRight: ".25em" }}
            onClick={() => props.onQuantityChange(props.product, quantity || 1)}
            className="update-cart-btn heading p-text-center p-button-raised p-button-rounded"
          />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {qtyDropdown}
        <Button
          label="Add to Cart"
          style={{ marginRight: ".25em" }}
          onClick={() => props.onAddCart(props.product, quantity || 1)}
          className="add-cart-btn heading p-text-center p-button-raised p-button-rounded"
        />
      </React.Fragment>
    );
  };

  const getRemoveButton = () => {
    if (props.product.quantity) {
      return (
        <Button
          label=""
          icon="pi pi-trash"
          className="p-button-danger p-button-raised p-button-rounded p-text-right"
          onClick={() => onDelete()}
        />
      );
    }
  };

  const footer = (
    <div className="counter-wrapper">
      {getCartButtons()}
      {getRemoveButton()}
    </div>
  );
  
  return (
    <div className="product-card">
      <Card
        title={props.product.name}
        subTitle={props.product.description || "-"}
        style={{ width: "20em" }}
        footer={footer}
        header={header}
      >
      </Card>
    </div>
  );
};

export default ProductCard;
