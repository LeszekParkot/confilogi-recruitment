import React from "react";
import LinkItem from "components/Layout/LinkItem/LinkItem";


function Links() {
   return (
      <>
         <LinkItem path="/features">
            Features
         </LinkItem>
         <LinkItem path="/pricing">
            Pricing
         </LinkItem>
         <LinkItem path="/contact">
            Contact
         </LinkItem>
      </>
   );
}


export default Links;