import React from 'react';
import './home.css';

import BrandsImg from '../../components/BrandList/brandsImg';

const Home = () => {
    return ( 
        <React.Fragment>
            <section className="p-grid landing-section">
                <div className="p-col-6">
                    <img src="assets/images/landing/specs.svg" alt="Books" className="svg-logo"/>
                </div>
                <div className="hero-section p-col-6">
                    Your Stationary Shop
                </div>
            </section>
            <BrandsImg></BrandsImg>
        </React.Fragment>
     );
}
 
export default Home;