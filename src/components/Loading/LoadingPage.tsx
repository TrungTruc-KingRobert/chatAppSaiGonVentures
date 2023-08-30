import React from "react";

const LoadingPage = ({ size }: { size: number }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="animate-spin"
      >
        <div
          className="h-full w-full border-4 border-t-sky-500
       border-b-sky-500 rounded-[50%]"
        ></div>
      </div>
    </div>
  );
};

export default LoadingPage;
