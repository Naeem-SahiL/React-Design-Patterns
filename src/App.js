import { useEffect, useState } from "react";
import DemoCustomHooks from "./customHooks/DemoCustomHooks";
import DemoFP from "./functional_patterns/DemoFP";
import RecursiveComponent from "./functional_patterns/RecursiveComponent";
import UserInfoForm from "./higher_order_components/UserInfoForm";
import UserInfoWithLoader from "./higher_order_components/UserInfoWithLoader";
import "./styles.css";
const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi',
      },
      b32: {
        message: 'Hi',
      }
    }
  },
  c: {
    c1: 2,
    c2: 3,
  }
}


export default function App() {

  return (
    <>
      <DemoFP />
    </>
  );
}
