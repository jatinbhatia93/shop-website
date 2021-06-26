import React, { Component } from "react";
import BrandHolder from "../BrandHolder/brandholder";
import { Link } from "react-router-dom";

class BrandsImg extends Component {
  state = {};
  render() {
    const listOfBrands = [
      {
        name: "Doms",
        imgPath: "assets/images/brands-logos/doms.png",
      },
      {
        name: "Apsara",
        imgPath: "assets/images/brands-logos/apsara.png",
      },
      {
        name: "Elkos",
        imgPath: "assets/images/brands-logos/elkos.png",
      },
      {
        name: "Rorito",
        imgPath: "assets/images/brands-logos/rorito.jpg",
      },
      {
        name: "Nataraj",
        imgPath: "assets/images/brands-logos/nataraj.png",
      },
      {
        name: "Cello",
        imgPath: "assets/images/brands-logos/cello.png",
      },
    ];
    return (
      <React.Fragment>
        <div className="p-grid width-100p p-mt-2 p-mb-2 p-text-center">
          <div className="p-col-12">
            <div className="text-lg text-bold heading">Brands</div>
            <p className="text-md">
              Explore the collection of brands. More to come soon!
            </p>
          </div>
        </div>
        <div className="p-grid p-col-8 p-offset-2 p-text-center">
          {listOfBrands.map((brand) => (
            <div className="p-col-6" key={brand.name}>
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

export default BrandsImg;
