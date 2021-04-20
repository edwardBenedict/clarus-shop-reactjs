import { useContext } from "react";
import EmptyBasket from "./EmptyBasket";
import NonEmptyBasket from "./NonEmptyBasket";
import { ProductContext } from "../../context/ProductContext";
import "./style.css";

const Banner = () => {
  const { checkoutProducts } = useContext(ProductContext);

  console.log("checkoutProducts", checkoutProducts);

  return (
    <div>
      {checkoutProducts.length === 0 ? (
        <EmptyBasket />
      ) : (
        <NonEmptyBasket checkoutProducts={checkoutProducts} />
      )}
    </div>
  );
};

export default Banner;
