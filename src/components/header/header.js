import "./header.css";
import NavHeader from "./nav-header";
import MainHeader from "./main-header";

function Header() {
  return (
    <div className="header--wrapper">
      <NavHeader />
      <MainHeader />
    </div>
  );
}

export default Header;
