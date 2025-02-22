import React from 'react';

const OffersSection = () => {
  return (
    <div className="offersSection">
      <div className="offers">
        <h3>Exclusive Offers</h3>
        <p>Get the best deals on our products!</p>
      </div>
      <div className="orders">
        <h3>Your Orders</h3>
        <p>Track your recent purchases here.</p>
      </div>
      <div className="viewMore">
        <button className="viewMoreBtn">View More</button>
      </div>
    </div>
  );
};

export default OffersSection;
