import React from "react";
import { Button } from "react-bootstrap";

const ScrollToTop = () => {
  return (
    <div>
      <Button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="rounded-circle d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          fontSize: "20px",
          bottom: "40px",
          right: "40px",
          textAlign: "center",
          width: "3rem",
          height: "3rem",
        }}
        variant="outline-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />{" "}
        </svg>
      </Button>
    </div>
  );
};

export default ScrollToTop;
