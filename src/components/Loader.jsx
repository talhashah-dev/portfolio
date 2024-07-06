import React from "react";
import { Triangle } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center py-72 max-[426px]:py-50">
      <Triangle
        visible={true}
        height="150"
        width="150"
        color="#00B2DF"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
