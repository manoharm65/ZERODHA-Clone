import React from "react";
function OpenAcount() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Home Hero" className="mb-5" />
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-3 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default OpenAcount;
