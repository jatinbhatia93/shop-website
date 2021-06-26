import React, { Component } from "react";
import BrandHolder from "../BrandHolder/brandholder";
import { Link } from "react-router-dom";
import './brandsList.css';

class BrandsList extends Component {
  state = {};
  render() {
    const listOfBrands = [
      {
        name: "Apsara",
        imgPath: "assets/images/brands-logos/apsara.png",
      },
      {
        name: "Doms",
        imgPath: "assets/images/brands-logos/doms.png",
      },
      {
        name: "Nataraj",
        imgPath: "assets/images/brands-logos/nataraj.png",
      },
      {
        name: "Cello",
        imgPath: "assets/images/brands-logos/cello.png",
      },
      {
        name: "Rorito",
        imgPath: "assets/images/brands-logos/rorito.jpg",
      },
      {
        name: "Elkos",
        imgPath: "assets/images/brands-logos/elkos.png",
      },

    ];
    return (
      <React.Fragment>
        <div className="width-100p p-mt-2 p-mb-2 p-text-center">
            <div className="text-lg text-bold h3 brands--text">Brands</div>
            <p className="text-md brands--text-p">
              Explore the collection of brands. More to come soon!
            </p>
        </div>
        <div className="p-text-center brands-list">
          {listOfBrands.map((brand) => (
            <div className="brand-holder" key={brand.name}>
              <Link to={"/products/" + brand.name}>
                <BrandHolder src={brand.imgPath} name={brand.name} />
              </Link>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default BrandsList;
