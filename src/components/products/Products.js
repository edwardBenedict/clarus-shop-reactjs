import { Grid, Container } from "@material-ui/core";
import Product from "../product/Product";
import Spinner from "../spinner/Spinner";
import Banner from "../banner/Banner";
import "./style.css";
import { DummyData } from "../../helpers/DummyData";

const Products = ({ addProduct }) => {
  if (!DummyData?.length) return <Spinner />;

  return (
    <div>
      <Banner />
      <Container id="products">
        <Grid container spacing={4}>
          {DummyData?.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4}>
              <Product product={product} addProduct={addProduct} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
