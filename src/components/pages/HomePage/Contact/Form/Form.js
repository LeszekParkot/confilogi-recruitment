import React, { Component } from "react";
import { ReactComponent as IconError } from "assets/icons/icon-error.svg";
import { inputWrapper, inputItem, input, errorMessage, form, iconError, btnSubmit, errorInputWrapper } from "./Form.module.scss";


class Form extends Component {

   state = {
      email: "",
      isEmailCorrect: true
   }

   handleChange = (e) => {
      this.setState({
         email: e.target.value
      })
   }

   handleSubmit = (e) => {
      e.preventDefault();
      if ((this.state.email !== "") && this.state.email.includes("@")) {
         this.setState({
            isEmailCorrect: true
         })
      } else {
         this.setState({
            isEmailCorrect: false
         })
      }
   }

   render() {
      return (
         <form
            className={form}
            onSubmit={this.handleSubmit}
            noValidate>

            <div className={this.state.isEmailCorrect ? inputWrapper : errorInputWrapper}>
               <div className={inputItem}>
                  <input
                     className={input}
                     type="email"
                     onChange={this.handleChange}
                     value={this.state.email} />
                  <IconError className={this.state.isEmailCorrect ? iconError : null} />
               </div>
               <p className={errorMessage}>
                  {
                     this.state.isEmailCorrect ? null : "Whoops, make sure it's an email"
                  }
               </p>
            </div>

            <button className={btnSubmit} type="submit">
               Contact Us
            </button>
         </form>
      );
   }
}

export default Form;