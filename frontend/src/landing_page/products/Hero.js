import React from 'react';

function Hero() {
    return (
        <div className='container p-5 text-center fs-3 mt-5 mb-5'>
          <h1>Zerodha Products</h1>
          <p>Sleek, modern, and intuitive trading platforms</p>
          <p>Check out our 
            <a href="" style={{ textDecoration: "none" }}>
                        Investment Offering{" "}
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
          </p>
        </div>
      );
}

export default Hero;