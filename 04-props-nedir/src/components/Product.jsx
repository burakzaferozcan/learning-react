import React from "react";

function Product({ productName, price }) {
  //   console.log(props);
  return (
    <div>
      <div>urun bilgileri</div>
      <div>
        <div>isim : {productName}</div>
        <div>fiyat : {price}</div>
      </div>
    </div>
  );
}

export default Product;
