import React from "react";
import { ReactComponent as IconHamburger } from "assets/icons/icon-hamburger.svg";
import LinkItem from "components/Layout/LinkItem/LinkItem";
import LinksWrapper from "components/Layout/LinksWrapper/LinksWrapper";
import Logo from "components/Layout/Logo/Logo";
import NavWrapper from "components/Layout/NavWrapper/NavWrapper";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { navBtnShow, NavTopHeader } from "./Layout.module.scss";



function Layout({ children }) {
   return (
      <div>
         <header className={NavTopHeader}>
            <NavWrapper header>
               <Logo header />

               <MediaQuery minWidth={376}>
                  <LinksWrapper>
                     <LinkItem path="/features">
                        Features
                     </LinkItem>
                     <LinkItem path="/pricing">
                        Pricing
                     </LinkItem>
                     <LinkItem path="/contact">
                        Contact
                     </LinkItem>
                     <LinkItem login path="/login">
                        Login
                     </LinkItem>
                  </LinksWrapper>
               </MediaQuery>

               {/* toggler - responsive nav */}
               <MediaQuery
                  minWidth={0}
                  maxWidth={375}>
                  <button
                     className={navBtnShow}
                     type="button">
                     <IconHamburger />
                  </button>
               </MediaQuery>
            </NavWrapper>
         </header>


         {children}


         <footer>

            <NavWrapper>
               <Logo />

               <MediaQuery minWidth={376}>
                  <LinksWrapper>
                     <LinkItem path="/features">
                        Features
                     </LinkItem>
                     <LinkItem path="/pricing">
                        Pricing
                     </LinkItem>
                     <LinkItem path="/contact">
                        Contact
                     </LinkItem>
                  </LinksWrapper>
               </MediaQuery>

            </NavWrapper>

         </footer>

      </div>
   );
}


Layout.propTypes = {
   children: PropTypes.node
};


export default Layout;