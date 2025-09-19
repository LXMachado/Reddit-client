import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

export default function Loading({ loading = true }) {
  return (
    <div className="loading">
      <BounceLoader loading={loading} size={80} color="#36D7B7" />
    </div>
  );
}
