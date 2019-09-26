import React from 'react'; 
import './Business.css';

class Business extends React.Component{
    render(){
        
        const {business} = this.props; // shorthand of getting business from props = object.business, so since this .props is the object holding business this works
        const parameters =`https://www.google.com/maps/search/?api=1&query=${business.address}${business.city}`;
        return (
            <div>
                <div className="image-container">
                    <a href={business.url} target='_blank'><img src={business.imageSrc} alt='' /></a>
                </div>
                <h2>{business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <a href={parameters}>{business.address}</a>
                        <p>{business.city}</p>
                        <p>{business.state} {business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{(business.category).toUpperCase()}</h3>
                        <h3 className="rating">{business.rating} stars</h3>
                        <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Business;
