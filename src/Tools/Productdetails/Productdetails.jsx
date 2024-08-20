import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { addToCart } from "../../Store/slices/Cartslice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Productdetails = () => {
  const _useParams = useParams();
  let { id } = useParams();
  const dispatch = useDispatch()
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    window.scrollTo(0, 5);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const addToCartData = (item) => {
    dispatch(addToCart(item))
    toast.success("Item added successfully")
  }

  return (
    <>
      <div className="container">
        <Toaster/>
        <div className="row">
          <div className="col-md-4 p-3">
            <img src={product.image} alt={product.title} style={{ width: "500px" }} />
          </div>
          <div className="col-md-6 p-5">
            <div className="card-body">
              <h5 class="card-title">{product.title}</h5>
              <br />
              <p class="card-text">₹{product.price}</p>
              <p class="card-text">{product.description}</p>
              <br />
              <Button variant="contained" size="medium" onClick={() => addToCartData(product)}>Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdetails;