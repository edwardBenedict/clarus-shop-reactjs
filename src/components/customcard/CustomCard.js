import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import "./style.css";

const CustomCard = ({
  basket,
  product,
  updateProduct,
  RemoveItemFromBasket,
}) => {
  const { addProduct } = useContext(ProductContext);

  return (
    <Card className="custom-card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Product-image"
          height="260"
          className="card-image"
          image={product?.url}
          title="Product Image"
        />
        <CardContent className="content">
          <Typography
            className="title"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {basket && (
        <CardActions>
          <Typography
            className="basket-item-price"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.price}
          </Typography>
        </CardActions>
      )}
      <CardActions className="actions-content">
        {!basket && (
          <>
            <Typography
              className="price"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {product.price}
            </Typography>
            <Button
              size="large"
              className="custom-button"
              onClick={() => {
                addProduct(product);
              }}
            >
              <ShoppingCart /> Add to basket
            </Button>
          </>
        )}
        {basket && (
          <>
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => {
                RemoveItemFromBasket(product.id);
              }}
            >
              Remove
            </Button>
            <>
              <Button
                size="small"
                variant="outlined"
                className="increase-product-quantity"
                onClick={() => {
                  updateProduct(product.id, product.quantity + 1);
                }}
              >
                +
              </Button>
              <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => {
                  updateProduct(product.id, product.quantity - 1);
                }}
              >
                -
              </Button>
            </>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default CustomCard;
