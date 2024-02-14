const StickyNote = ({ heading, message, foot }) => {
  return (
    <div className="container mt-3">
      <div className="card bg p-0 w-auto">
        <div className="card-body bg-warning">
          <h2 className="card-title fs-6">{heading}</h2>
          <p className="card-text">{message}</p>
        </div>
        <div className="card-footer bg-warning">
          <small className="text-body-secondary">{foot}</small>
        </div>
      </div>
    </div>
  );
};

export default StickyNote;
