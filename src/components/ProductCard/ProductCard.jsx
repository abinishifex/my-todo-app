import React from "react";

function ProductCard({name,price,isAvailable}) {
    
    return(
        <div className="product-card">
            <h1>{name}</h1>
            <p>Price: ${price}</p>
            <p>Status: {isAvailable ? "In Stock" : "Out of Stock"}</p>
        </div>
    );
}
export default ProductCard;