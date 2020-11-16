import React from "react";
import { ReactComponent as IconClose } from "assets/icons/icon-close.svg";
import LinkItem from "components/Layout/LinkItem/LinkItem";
import Links from "components/Layout/Links/Links";
import Logo from "components/Layout/Logo/Logo";
import SocialMedia from "components/Layout/SocialMedia/SocialMedia";
import { btnNav, linksWrapper } from "./MobOpenNav.module.scss";


function MobOpenNav({ close }) {
   return (
      <nav className="d-flex flex-column">
         <div className="d-flex justify-content-between">
            <Logo open />

            <button
               className={btnNav}
               type="button"
               onClick={close}>
               <IconClose />
            </button>
         </div>

         <ul className={linksWrapper}>
            <Links />
            <LinkItem path="/login">
               Login
            </LinkItem>
         </ul>

         <div className="d-flex justify-content-center">
            <SocialMedia />
         </div>

      </nav>
   );
}

export default MobOpenNav;