import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className=""> 
      <div className="wrapper"> 
        <a id="hover-nav" className="navbar-brand" onClick={() => { navigate("/"); }} > Freedom Board </a> 
        <a id="hover-nav" className="navbar-brand" onClick={() => { navigate("/PublicBoard"); }} > Public Board </a> 
      </div> 
    </nav>
  );
};

export default NavBar;
