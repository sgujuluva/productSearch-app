import React from "react";

export default function Product({ product, index, handleSold, handleDelete }) {
  return (
    <div className="card" style={{ width: "18rem" }}>

       <img className="card-img-top" src={product.photo} alt="Card" /> 
      <div className="card-body">
        <h5 className="card-title">{product.productName}</h5>
        <p className="card-text">{product.price}</p>
        <p className="card-text">Sold?{product.sold ? "yes" : "no"} </p>
        <button className="btn btn-success" onClick={() => handleSold(index)}>Sold</button>
        <button className="btn btn-success" onClick={() => handleDelete(index)}>Delete</button>
      </div>

    </div>
  );
}
