import React from "react";
function Hero() {
  return (
    <div className="container mt-5 mb-5 p-5 text-center fs-5 p-5 text-muted">
      <div className=" mt-5 mb-5 ">
        <h1>Charges</h1>
      <h2>List of all charges and taxes</h2>
      </div>
      <div className="row mt-5 mb-5 p-5"></div>
      <div className="row mt-5 mb-5">
        <div className="col-4">
          <img src="media/images/pricing0.svg" alt="Coin"></img>
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/intradayTrades.svg" alt="Coin"></img>
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricing0.svg" alt="Coin"></img>
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges..
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
