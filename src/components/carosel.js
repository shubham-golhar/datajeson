import React from "react";

export default function Carosel() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="shubham/src/images/pexels-cesar-galeão-3253501.jpg"
              className="d-block w-100"
              alt="fitness"
            />
          </div>
          <div className="carousel-item">
            <img
              src="shubham/src/images/TigerWalk-1024x576.jpg"
              className="d-block w-100"
              alt="tiger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="shubham/src/images/wallpaperbetter.jpg"
              className="d-block w-100"
              alt="wall"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
<Carosel />;
