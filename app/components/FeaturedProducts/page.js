import React from "react";

const FeaturedProduct = ({ name, image, description, price }) => {
  const priceAsNumber = parseFloat(price);
  const formattedPrice = isNaN(priceAsNumber) ? "N/A" : priceAsNumber.toFixed(2);

  return (
    <div className="featured-product">
      <div className="featured-product__image">
        <img src={image} alt={name} />
      </div>
      <div className="featured-product__details">
        <h2 className="featured-product__name">{name}</h2>
        <p className="featured-product__description">{description}</p>
        <p className="featured-product__price">${formattedPrice}</p>
        <button className="featured-product__button">Add to Cart</button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
