import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { linkItem, loginItem } from "./LinkItem.module.scss";


function LinkItem({ path, children, login }) {
   return (
      <li className={login ? loginItem : null}>
         <Link
            className={linkItem}
            to={path}>
            {children}
         </Link>
      </li>
   );
}


LinkItem.propTypes = {
   path: PropTypes.string.isRequired,
   children: PropTypes.string.isRequired,
   login: PropTypes.bool
}


export default LinkItem;