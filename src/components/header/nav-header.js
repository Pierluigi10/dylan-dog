import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/icons/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import "./nav-header.css";

// function NavHeader() {
//   useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked times`;
//   });
//   return (
// <details id="mobile-menu">
//   <summary>
//     <div id="burger">
//       <span></span>
//       <span></span>
//       <span></span>
//     </div>
//   </summary>
//   <nav className="navheader--wrapper">
//     <ul>
//       <li>
//         <a href="/">
//           <h1>Dylan Dog</h1>
//         </a>
//       </li>
//       <li>
//         <a href="/">Solved Cases</a>
//       </li>
//       <li>
//         <a href="/">My Story</a>
//       </li>
//       <li>
//         <a href="/">Contact me</a>
//       </li>
//     </ul>
//   </nav>
// </details>

//     <div>
//       <nav className="navheader--wrapper navheader--burgernone">
//         <ul>
//           <li>
//             <a href="/">
//               <h1>Dylan Dog</h1>
//             </a>
//           </li>
//           <li>
//             <a href="/">Solved Cases</a>
//           </li>
//           <li>
//             <a href="/">My Story</a>
//           </li>
//           <li>
//             <a href="/">Contact me</a>
//           </li>
//         </ul>
//       </nav>
//       <div id="burger">
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </div>
//   );
// }

const NavHeader = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navheader--wrapper">
      <div className="logo-nav">
        <a href="/">
          <h1>Dylan Dog</h1>
        </a>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">Solved Cases</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">My Story</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};
export default NavHeader;
