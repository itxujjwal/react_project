import React, { useEffect, useState, useCallback } from "react";
import Sliders from "./Sliders";
import "./Home.css";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addToCart } from "../../Store/slices/Cartslice";
import toast, { Toaster } from "react-hot-toast";
const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

const Home = () => {
  const [data, setData] = useState([]);
  const [cate, setcate] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("cate_name");
  const _useNavigate = useNavigate();

  const getAllProducts = useCallback(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setData(res.data);
    });
  }, []);

  const getAllCategory = useCallback(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setcate(res.data);
    });
  }, []);

  const getDataByCategoryName = (cate_name) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${cate_name}`)
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    if (query == null) {
      getAllProducts();
      getAllCategory();
    } else {
      // getAllProducts();
      // getAllCategory();
      getDataByCategoryName(query);
    }
  }, [query]);

  const addTocart = (data) => {
    dispatch(addToCart(data));
    toast.success("Product added to cart");
  };
  const getProductDetail = (id) => {
    _useNavigate(`/product-details/${id}`);
  };

  return (
    <>
      <Toaster />
      <Sliders />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-2">
            <ul className="list-group">
              <li className="list-group-item active" aria-current="true">
                Select Category
              </li>
              {cate.map((item) => (
                <li className="list-group-item">
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      getDataByCategoryName(item);
                    }}
                    style={{
                      textTransform: "capitalize",
                      textDecoration: "none",
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-10">
            <div className="row">
              {data.map((item, index) => {
                return (
                  <div className="col-md-3" key={index}>
                    <Card sx={{ maxWidth: 300, margin: "0% auto 2% auto" }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="200"
                        image={item.image}
                        sx={{
                          padding: "1em 1em 0em 1em",
                          objectFit: "contain",
                        }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {truncate(item.title, 20)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {truncate(item.description, 60)}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          variant="contained"
                          size="medium"
                          onClick={() => {
                            addTocart(item);
                          }}
                        >
                          Add to Cart
                        </Button>
                        <Button
                          variant="contained"
                          size="medium"
                          color="success"
                          onClick={() => {
                            getProductDetail(item.id);
                          }}
                          style={{ marginLeft: "20%" }}
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
