import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState();
  const [checkoutProducts, setCheckoutProducts] = useState([]);

  // const user = localStorage.getItem("user");

  const addProduct = (newProduct) => {
    console.log("NP", newProduct);
    setCheckoutProducts([...checkoutProducts, newProduct]);
    console.log("CP", checkoutProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        checkoutProducts,
        setCheckoutProducts,
        addProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
