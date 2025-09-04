import React from "react";
import "./Newcollections.css";
import new_collections from "../../assets/newcollections";
import Item from '../Item/Item';

const Newcollections = () => {
  return (
    <div className="newcollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((product, i) => (
          <Item
            key={i}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Newcollections;
