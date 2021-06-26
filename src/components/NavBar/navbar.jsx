import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { brandList, categoryList } from "../../Contants/productList.const";
import "./navbar.css";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const menu = useRef(null);
  const categoryMenu = useRef(null);
  const history = useHistory();
  const brandMenu = [...brandList].sort().map((b) => {
    return {
      label: b,
      command: () => {
        history.push("/products/" + b);
      },
    };
  });
  const category = [...categoryList].sort().map((b) => {
    return {
      label: b.label,
      command: () => {
        history.push("/products/" + b.value);
      },
    };
  });
  const getBadge = () => {
    let initialValue = 0;
    let sum = props.cartItems.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity
      , initialValue
    )
    if (sum) { 
      return (
        <Badge
          value={sum}
        ></Badge>
      );
    }
  };

  const redirectToCart = () => {
    history.push("/cart");
  }
  return (
    <React.Fragment>
      <header className="navbar p-grid p-col-12">
        <div className="p-offset-1 p-col-1">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              alt="Shree Bhatia Traders"
              className="logo"
            />
          </Link>
        </div>
        <div className="brand-name p-col-3">Shree Bhatia Traders</div>
        <div className="p-col-1 p-offset-4">
          <Button
            onClick={(event) => menu.current.toggle(event)}
            className="p-button-text nav-buttons"
          >
            Brands
            <Menu model={brandMenu} popup ref={menu} id="popup_menu" />
          </Button>
        </div>
        <div className="p-col-1">
            <Button className="p-button-text nav-buttons" label="Products" onClick={(event) => categoryMenu.current.toggle(event)} />
            <Menu model={category} popup ref={categoryMenu} id="popup_menu" />
        </div>
        <div className="p-col-1" onClick={redirectToCart}>
          <i
            className="pi pi-shopping-cart p-mr-4 p-text-secondary p-overlay-badge cursor-pointer"
            style={{ fontSize: "2rem" }}
          >
            {getBadge()}
          </i>
        </div>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
