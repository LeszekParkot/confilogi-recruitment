import React from "react";
import DeskNav from "components/Layout/DeskNav/DeskNav";
import MobCloseNav from "components/Layout/MobCloseNav/MobCloseNav";
import MobOpenNav from "components/Layout/MobOpenNav/MobOpenNav";
import PropTypes from "prop-types";
import MediaQuery from "react-responsive";
import { NavTopHeader } from "./Layout.module.scss";



function Layout({ children, isOpen, open, close }) {

   return (
      <>
         <header className={NavTopHeader}>
            <div className="container">
               <MediaQuery minWidth={376}>
                  <DeskNav />
               </MediaQuery>

               <MediaQuery minWidth={0} maxWidth={375}>
                  {
                     isOpen ?
                        <MobOpenNav close={close} /> :
                        <MobCloseNav open={open} />
                  }

               </MediaQuery>
            </div>
         </header>


         {children}


         <footer>
            <div className="container">

            </div>
         </footer>
      </>
   );
}


Layout.propTypes = {
   children: PropTypes.node
};


export default Layout;