import React from "react";
import Lottie from "lottie-react";

const LottieProvider = ({ lottieAsset, style }) => (
  <div style={{ ...style }}>
    <Lottie animationData={lottieAsset} loop={true} />
  </div>
);

export default LottieProvider;
