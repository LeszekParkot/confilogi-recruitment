import React from "react";
import Form from "components/pages/HomePage/Contact/Form/Form";
import Header from "components/partials/Header/Header"
import { contactSec, joined, contentWrapper } from "./Contact.module.scss";


class Contact extends React.Component {

   state = {
      joined: 35000 + "+"
   }

   componentDidMount() {
      setTimeout(() => {
         this.setState({
            joined: 0
         })
      }, 20000);
   }


   render() {
      return (
         <section className={contactSec}>
            <div className="container">
               <div className={contentWrapper}>

                  <p className={joined}>
                     {this.state.joined.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")} already joined
                  </p>
                  <Header>
                     Stay up-to-date with what we're doing
                  </Header>

                  <Form />

               </div>
            </div>
         </section>
      );
   }
}

export default Contact;