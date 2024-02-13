import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ButtonSecondary = ({ children }: Props) => {
  return <div className="btn btn-secondary">{children}</div>;
};

export default ButtonSecondary;
