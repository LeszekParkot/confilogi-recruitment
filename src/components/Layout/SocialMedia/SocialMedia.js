import React from "react";
import { ReactComponent as IconFacebook } from "assets/icons/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "assets/icons/icon-twitter.svg";
import { social } from "./SocialMedia.module.scss"


function SocialMedia() {
   return (
      <>
         <a
            className={social}
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            <IconFacebook />
         </a>
         <a
            className={social}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer">
            <IconTwitter />
         </a>
      </>
   );
}


export default SocialMedia;