import React from "react";
import { header } from "components/partials/Header/Header.module.scss";
import PropTypes from "prop-types";
console.log(header);


function Header({ children }) {
   return (
      <header className={header}>
         {children}
      </header>
   );
}


Header.propTypes = {
   children: PropTypes.node,
};


export default Header;