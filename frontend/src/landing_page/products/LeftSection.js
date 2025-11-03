import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a style={{marginRight:"40px"}} href={tryDemo}>Try Demo
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore}>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                Learn More</a>
          </div>
          <div className="mt-3 ">
            <a style={{marginRight:"60px"}} href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="googlePlayBadge"
              />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="appstoreBadge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
//   return (
//     <div className="container mt-5 mb-5">
//       <div className="row">
//         <div className="col-6">
//           <img
//             src="media/images/kite.png"
//             alt="Kite Platform"
//             className="img-fluid"
//             style={{ width: "100%" }}
//           />
//         </div>
//         <div className="col-2"></div>
//         <div className="col-4 fs-5">
//           <h1>Kite</h1>
//           <p>
//             Our ultra-fast flagship trading platform with streaming market data,
//             advanced charts, an elegant UI, and more. Enjoy the Kite experience
//             seamlessly on your Android and iOS devices.
//           </p>
//           <div className="col">
//             <a href="" style={{ textDecoration: "none" }}>
//             Try Demo{" "}
//             <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
//           <a href="" style={{ textDecoration: "none" }}>
//             Learn More{" "}
//             <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
//           </a>
//           </div>
//           <div className="row">
//             <div className="col mt-4">
//                 <img src="media/images/googlePlayBadge.svg" alt="googlePlayBadge" className="img-fluid" style={{ width: "100%" }} />
//             </div>
//             <div className="col mt-4">
//                 <img src="media/images/appstoreBadge.svg" alt="appstoreBadge" className="img-fluid" style={{ width: "100%" }} />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

export default LeftSection;
