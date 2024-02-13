import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  onSelect?: () => void;
  onSubmit?: () => void;
  type?: () => void;
}

const Button = ({ children, onClick, onSelect, onSubmit }: ButtonProps) => {
  return (
    <div className="container text-center">
      <button
        className="btn btn-light border rounded"
        onClick={onClick}
        type="submit"
      >
        <h5 className="m-1 fw-light">{children}</h5>
      </button>
    </div>
  );
};
export default Button;
