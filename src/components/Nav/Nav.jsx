import "./Nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
function Nav() {
  return (
    <nav>
      <a href="#">
        <IoHomeOutline />
      </a>
      <a href="#About">
        <LuUserRound />
      </a>
       <a href="#Skills">
        <RiServiceLine />
      </a>
      <a href="#Projects">
        <BiBook />
      </a>
      <a href="#Contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
