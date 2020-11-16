import React from "react";
import { ReactComponent as IconHamburger } from "assets/icons/icon-hamburger.svg";
import Logo from "components/Layout/Logo/Logo";
import { btnNav } from "./MobCloseNav.module.scss";


function MobCloseNav({ open }) {
   return (
      <nav className="d-flex align-items-center justify-content-between">
         <Logo />

         <button
            className={btnNav}
            type="button"
            onClick={open}>
            <IconHamburger />
         </button>
      </nav>
   );
}


export default MobCloseNav;