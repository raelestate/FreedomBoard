import { ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  onSelect?: () => void;
  onSubmit?: () => void;
  type?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div>
      <a href="" className="cust_btn" onClick={onClick} type="submit">{children}</a>
    </div>
      
  );
};
export default Button;
