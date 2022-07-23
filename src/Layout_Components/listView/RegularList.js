import React from "react";

export const RegularList = ({
  items,
  resourseName,
  itemComponent: ItemComponent
}) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourseName]: item }} />
      ))}
    </>
  );
};
