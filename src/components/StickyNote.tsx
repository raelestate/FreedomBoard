import { ReactNode } from "react";

interface Props {
  heading: ReactNode;
  message: ReactNode;
  foot: ReactNode;
}

const StickyNote = ({ heading, message, foot }: Props) => {
  return (
    <>
      <div className="container mt-3">
        <div className="card bg p-0 w-auto">
          <div className="card-body bg-warning">
            <div className="card-title fs-6">{heading}</div>
            <div className="card-text">{message}</div>
          </div>
          <div className="card-footer bg-warning">
            <div className="text-body-secondary">{foot}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyNote;
