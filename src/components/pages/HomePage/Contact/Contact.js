import React from "react";
import Header from "components/partials/Header/Header"
import { contactSec, joined } from "./Contact.module.scss";


class Contact extends React.Component {

   // TODO: zmień wartość stanu na numer
   state = {
      joined: "35.000"
   }

   componentDidMount() {
      setTimeout(() => {
         this.setState({
            joined: "0"
         })
      }, 20000);
   }


   render() {
      return (
         <section className={contactSec}>
            <div className="container">
               <p className={joined}>
                  {this.state.joined}+ already joined
               </p>
               <Header>
                  Stay up-to-date with what we're doing
               </Header>
            </div>
         </section>
      );
   }
}

export default Contact;