import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-transparent p-2 pt-3">
      <div className="container-fluid">
        <a
          id="hover-nav"
          className="navbar-brand"
          onClick={() => {
            navigate("/");
          }}
        >
          Freedom Board
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
