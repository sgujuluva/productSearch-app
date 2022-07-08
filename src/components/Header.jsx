import React, { useState } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import Menuitems from "./Menuitems";


export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);
  return (
    <div
      className={toggleTheme ? "dark" : "light"}
      style={{
        height: "70px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position:"relative"
      }}
    >
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        Menu{toggleMenu ? "🔺" : "🔻"}
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setToggleTheme(!toggleTheme)}
      >
        Theme{toggleTheme ? <BsSunFill /> : <BsFillMoonFill />}
      </div>

    {toggleMenu && <Menuitems toggleTheme = {toggleTheme}/>}
    </div>
  );
}
