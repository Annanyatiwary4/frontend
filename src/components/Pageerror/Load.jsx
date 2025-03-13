import { useState, useEffect } from "react";
import "./Loader.css";

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-transparent z-50">
      <div className="loader relative w-16 h-16 flex justify-center items-center">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`load${i + 1} absolute bg-white w-4 h-4 rounded-md`}></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;