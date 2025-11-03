import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <h1>To Create a tciket, Select a relevant topic</h1>
      <div className="row">
        
        <div className="col-4 p-5">
          <h4>
            <i className="fa-solid fa-circle-plus"></i> Account Opening
          </h4>
          <div className="mt-5">
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Online Account Opening</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Offline Account Opening</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Company , partnership Firm Account Opening</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>NRI Account Opening</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Charges at Zerodha</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Zerodha IDFC FIRST Bank 3-in-1 Account</a>
          </div>
        </div>

        <div className="col-4 p-5">
          <h4>
            <i className="fa-solid fa-circle-user"></i> Your Zerodha Account
          </h4>
          <div className="mt-5">
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Login Credentials</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Account Modification and Segment addition</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>DP ID and Bank Details</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Your Profile</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Transfer and conversion of shares</a>
          </div>
        </div>

        <div className="col-4 p-5">
          <h4>
            <i className="fa-solid fa-signal"></i> Your Zerodha Account
          </h4>
          <div className="mt-5">
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Margin/Leverage, Product Order types</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Kite Web and Mobile</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Trading FAQs</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Corporate Actions</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Sentinel</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Kite API</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>Pi and other Platform</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>StockReport+</a>
            <a href="#" className="d-block py-1" style={{ textDecoration: "none" }}>GTT</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;
