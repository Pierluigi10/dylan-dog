import "./nav-header.css";

function NavHeader() {
  return (
    <nav className="navheader--wrapper">
      <ul>
        <li>
          <a href="/">
            <h1>Dylan Dog</h1>
          </a>
        </li>
        <li>
          <a href="/">Solved Cases</a>
        </li>
        <li>
          <a href="/">My Story</a>
        </li>
        <li>
          <a href="/">Contact me</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavHeader;
