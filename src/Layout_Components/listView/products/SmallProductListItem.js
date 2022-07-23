import React from "react";

export const SmallProductListItem = ({ product }) => {
  const { name, price } = product;

  return (
    <p>
      {name}, price:{price}
    </p>
  );
};
