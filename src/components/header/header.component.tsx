import { useState } from "react";
import "./header.css";
const Header = () => {
  const [selected, setSelected] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  return (
    <div className="head flex w-full h-16 fixed top-0 ">
      <ul>
        <li
          className={selected[0] ? "focus" : ""}
          onClick={() => {
            setSelected([true, false, false, false]);
          }}
        >
          <a href="#Home">Home</a>
          <div className="down"></div>
        </li>
        <li
          className={selected[1] ? "focus" : ""}
          onClick={() => {
            setSelected([false, true, false, false]);
          }}
        >
          <a href="#About">About</a>
          <div className="down"></div>
        </li>
        <li
          className={selected[2] ? "focus" : ""}
          onClick={() => {
            setSelected([false, false, true, false]);
          }}
        >
          <a href="#Portfolio">Portfolio</a>
          <div className="down"></div>
        </li>
        <li
          className={selected[3] ? "focus" : ""}
          onClick={() => {
            setSelected([false, false, false, true]);
          }}
        >
          <a href="#Contact">Contact</a>
          <div className="down"></div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
