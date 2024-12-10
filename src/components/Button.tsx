import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
  return (
    <a className="cust_btn" onClick={onClick} type={type}> {children} </a>
  );
};

export default Button;
