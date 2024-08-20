import React from "react";

const Sliders = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png"
              class="d-block w-100 my_slides "
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png"
              class="d-block w-100 my_slides"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png"
              class="d-block w-100 my_slides"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sliders;
