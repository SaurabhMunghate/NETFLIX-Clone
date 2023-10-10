import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  //   const [show, handleShow] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   }, []);
  return (
    // <div className={`nav ${show && "nav_black"}`}>
    <div className={`nav`}>
      <img
        className="nav_logo"
        src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq3666MqAkaCMfuUPll7hL4LmYbx5QoX5-pME4oQk27y_ROcE4H0pc8INEmLJUcjEnK9g&usqp=CAU"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
