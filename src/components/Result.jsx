import React from "react";
//components
import Product from "./Product";

function Result(props) {
  return (
    <div className="container">
      {props.product.map((item, i) => {
        return (
          <Product
            index={i}
            handleDelete={props.handleDelete}
            handleSold={props.handleSold}
            key={i}
            products={item}
          />
        );
      })}
    </div>
  );
}

export default Result;
