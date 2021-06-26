import React from 'react';
import './brandholder.css';

const BrandHolder = (props) => {
    return (
        <div>
            <div className="brand-card p-p-2">
                <img src={props.src} alt={props.name} className="brand-img"/>
            </div>
        </div>
    );
}
 
export default BrandHolder;