const Button = ({ children, onClick }) => {
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
