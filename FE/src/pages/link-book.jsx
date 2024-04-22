import React from "react";
import { Link } from "react-router-dom";
function LinkBook() {
  return (
    <div className="container mt-5 ml-5">
      <h1 className="font-bold text-2xl mb-5">Link các sản phẩm đã mua</h1>
      <p>
        <strong>Bí mật của may mắn</strong>:
        <a
          className="text-blue-500 ml-5"
          href="https://drive.google.com/file/d/1DaoW9CH7ri29mHZ5Qtxl6uMo-wH3X4ol/view"
        >
          https://drive.google.com/file/d/1DaoW9CH7ri29mHZ5Qtxl6uMo-wH3X4ol/view
        </a>
      </p>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded">
          Quay về
        </button>
      </Link>
    </div>
  );
}

export default LinkBook;
