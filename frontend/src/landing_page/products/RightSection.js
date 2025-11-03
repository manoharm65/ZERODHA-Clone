import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  
}) {
  return (
  <div className="container">
    <div className="row">
        <div className="col-4">
            <h1>{productName}</h1>
            <p>{productDescription}</p>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo{" "}
              <i className="fa fa-long-arrow-right"></i>
            </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
            <img src={imageURL} />
        </div>
    </div>

  </div>
  );
}

export default RightSection;

{
  /* <div className="container mt-5 mb-5 p-5">
      <div className="row">
        <div className="col-4 fs-5">
          <h1>Console</h1>
          <p>
            The central dashboard for your Zerodha account. Gain insights into
            your trades and investments with in-depth reports and
            visualisations.
          </p>
          <div className="col">
            <a href="" style={{ textDecoration: "none" }}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>{" "}
           
          </div>
          
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <img
            src="media/images/console.png"
            alt="Kite Platform"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div> */
}
