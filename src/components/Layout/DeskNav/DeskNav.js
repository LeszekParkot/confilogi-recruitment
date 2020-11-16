import React from "react";
import LinkItem from "components/Layout/LinkItem/LinkItem";
import Links from "components/Layout/Links/Links";
import Logo from "components/Layout/Logo/Logo";
import { linksWrapper } from "./DeskNav.module.scss";


function DeskNav() {
   return (
      <nav className="d-flex align-items-center justify-content-between">
         <Logo />

         <ul className={linksWrapper}>
            <Links />
            <LinkItem login path="/login">
               Login
            </LinkItem>
         </ul>

      </nav>
   );
}

export default DeskNav;