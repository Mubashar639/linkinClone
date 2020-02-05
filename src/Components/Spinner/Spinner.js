import React from "react";
import Loader from "react-loader-spinner";

export const Spinner = (displaySpinner) => {
  return (
    <div
      style={{
        display: displaySpinner ? "block" : "none",
        position: "relative",
        zIndex: "91209190"
      }}
    >
      <Loader
        type="Watch"
        color="#2623cc"
        height={100}
        width={100}
        timeout={10000}
      />
    </div>
  );
};
