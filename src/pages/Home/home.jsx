import React from 'react';
import './home.css';

import BrandsList from '../../components/BrandList/brandsList';

const Home = () => {
    return ( 
        <React.Fragment>
            <div className="main-section">
                <div className="main-section--logo">
                    <img src="assets/images/landing/specs.svg" alt="Books" className="main-section--img"/>
                </div>
                <div className="main-section--text">
                    Your Stationary Shop
                </div>
            </div>
            <BrandsList></BrandsList>
        </React.Fragment>
     );
}
 
export default Home;