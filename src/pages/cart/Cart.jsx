import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function Cart() {
  const context = useContext(myContext);
  const { myStyle } = context;
  console.log(myStyle);

  return (
    <div>
      Cart
      <h1>color:{myStyle.color}</h1>
      <h1>fontSize:{myStyle.fontSize}</h1>
    </div>
  );
}

export default Cart;
