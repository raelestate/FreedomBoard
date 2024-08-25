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
