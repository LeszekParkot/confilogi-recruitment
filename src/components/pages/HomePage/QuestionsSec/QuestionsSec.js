import React from "react";
import { ReactComponent as IconArrow } from "assets/icons/icon-arrow.svg";
import Header from "components/partials/Header/Header"
import Text from "components/partials/Text/Text"
import Title from "components/partials/Title/Title"
import Answer from "./Answer/Answer";
import { questionsSec, questionsWrapper, questionWrapper, questionItem, active } from "./QuestionsSec.module.scss";


class QuestionsSec extends React.Component {

   state = {
      activeAnswer: 0
   }

   ansverToggler = (e) => {
      const id = +e.currentTarget.id;
      if (id !== this.state.activeAnswer) {
         this.setState({
            activeAnswer: id
         })
      } else {
         this.setState({
            activeAnswer: 0
         })
      }
   }

   render() {
      return (
         <section className={`${questionsSec} container`}>
            <Header>
               <Title>
                  Frequently Asked Questions
               </Title>
               <Text>
                  Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.
               </Text>
            </Header>

            <div className={questionsWrapper}>

               <div className={questionWrapper}>
                  {/* TODO: stwórz osobny komponent dla questionItem */}
                  <div
                     className={questionItem}
                     id={1}
                     onClick={this.ansverToggler}>
                     <p>
                        What is Bookmark?
                     </p>
                     <IconArrow className={(this.state.activeAnswer === 1) ? active : null} />
                  </div>
                  <Answer
                     id={1}
                     active={this.state.activeAnswer}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid dolorum nostrum deserunt quas eaque modi id laboriosam cum veniam fugit iure error totam accusantium perspiciatis ratione, autem placeat odit?
                  </Answer>
               </div>

               <div className={questionWrapper}>
                  <div
                     className={questionItem}
                     id={2}
                     onClick={this.ansverToggler}>
                     <p>
                        How can I request a new browser?
                     </p>
                     <IconArrow className={(this.state.activeAnswer === 2) ? active : null} />
                  </div>
                  <Answer
                     id={2}
                     active={this.state.activeAnswer}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid dolorum nostrum deserunt quas eaque modi id laboriosam cum veniam fugit iure error totam accusantium perspiciatis ratione, autem placeat odit?
                  </Answer>
               </div>

               <div className={questionWrapper}>
                  <div
                     className={questionItem}
                     id={3}
                     onClick={this.ansverToggler}>
                     <p>
                        Is there a mobile app?
                     </p>
                     <IconArrow className={(this.state.activeAnswer === 3) ? active : null} />
                  </div>
                  <Answer
                     id={3}
                     active={this.state.activeAnswer}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid dolorum nostrum deserunt quas eaque modi id laboriosam cum veniam fugit iure error totam accusantium perspiciatis ratione, autem placeat odit?
                  </Answer>
               </div>

               <div className={questionWrapper}>
                  <div
                     className={questionItem}
                     id={4}
                     onClick={this.ansverToggler}>
                     <p>
                        What about other Chromium browsers?
                     </p>
                     <IconArrow className={(this.state.activeAnswer === 4) ? active : null} />
                  </div>
                  <Answer
                     id={4}
                     active={this.state.activeAnswer}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid dolorum nostrum deserunt quas eaque modi id laboriosam cum veniam fugit iure error totam accusantium perspiciatis ratione, autem placeat odit?
                  </Answer>
               </div>


            </div>
         </section>
      );
   }


}

export default QuestionsSec;