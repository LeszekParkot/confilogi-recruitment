import React from "react";
import { ReactComponent as IconClose } from "assets/icons/icon-close.svg";
import { ReactComponent as IconHamburger } from "assets/icons/icon-hamburger.svg";
import LinkItem from "components/Layout/LinkItem/LinkItem";
import Links from "components/Layout/Links/Links";
import Logo from "components/Layout/Logo/Logo";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { NavTopHeader, linksWrapper, showNav } from "./Layout.module.scss";



function Layout({ children, isOpen }) {

   console.log(isOpen);

   return (
      <>
         <header className={NavTopHeader}>
            <div className="container">
               <nav className="d-flex align-items-center">
                  <Logo header />

                  <MediaQuery minWidth={376}>
                     <ul className={linksWrapper}>
                        <Links />
                        <LinkItem login path="/login">
                           Login
                        </LinkItem>
                     </ul>
                  </MediaQuery>

                  <MediaQuery minWidth={0} maxWidth={375}>
                     <button
                        className={showNav}
                        type="button">
                        <IconHamburger />
                     </button>


                     <button
                        className={showNav}
                        type="button">
                        <IconClose />
                     </button>
                  </MediaQuery>

               </nav>
            </div>
         </header>


         {children}


         {/* <header>
            <div className="container">
               <FooterNav />
            </div>
         </header> */}
      </>
   );
}


Layout.propTypes = {
   children: PropTypes.node
};


export default Layout;