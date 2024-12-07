import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  onSelect?: () => void;
  onSubmit?: () => void;
  type?: () => void;
  className?: ()=> void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
      <a href="" className="cust_btn" onClick={onClick} type="submit">{children}</a>      
  );
};
export default Button;
