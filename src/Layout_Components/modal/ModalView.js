import React from "react";
import { products } from "../listView/ListView";
import { RegularList } from "../listView/RegularList";
import { LargeProductListItem } from "../listView/products/LargeProductListItem";
import Modal from "./Modal";
export default function ModalView() {
  return (
    <>
      <Modal>
        <RegularList
          items={products}
          resourseName="product"
          itemComponent={LargeProductListItem}
        />
      </Modal>
    </>
  );
}
