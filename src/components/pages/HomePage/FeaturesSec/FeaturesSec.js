import React from "react";
import { ReactComponent as Ilus1 } from "assets/ilustrations/illustration-features-tab-1.svg";
import { ReactComponent as Ilus2 } from "assets/ilustrations/illustration-features-tab-2.svg";
import { ReactComponent as Ilus3 } from "assets/ilustrations/illustration-features-tab-3.svg";
import Button from "components/partials/Button/Button";
import Header from "components/partials/Header/Header";
import Text from "components/partials/Text/Text";
import Title from "components/partials/Title/Title";
import { ilusWrapper, art, featuresSec } from "./FeaturesSec.module.scss";
import NavItem from "./NavItem/NavItem";
import NavWrapper from "./NavWrapper/NavWrapper";
import Slide from "./SlideWrapper/Slide";
import SlideWrapper from "./SlideWrapper/SlideWrapper";




class FeaturesSec extends React.Component {

   state = {
      slide: 1
   }

   setSlide = (e) => {
      this.setState({
         slide: +e.target.value
      });
   }

   render() {
      return (
         <section className={featuresSec}>
            <div className="container">
               <Header>
                  <Title>
                     Features
                  </Title>
                  <Text>
                     Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                  </Text>
               </Header>

               <NavWrapper>
                  <NavItem
                     slideId={1}
                     activeSlide={this.state.slide}
                     setSlide={this.setSlide}>
                     Simple Bookmarking
                  </NavItem>
                  <NavItem
                     slideId={2}
                     activeSlide={this.state.slide}
                     setSlide={this.setSlide}>
                     Speedy Searching
                  </NavItem>
                  <NavItem
                     slideId={3}
                     activeSlide={this.state.slide}
                     setSlide={this.setSlide}>
                     Easy Sharing
                  </NavItem>
               </NavWrapper>
            </div>


            <SlideWrapper>

               <Slide
                  id={1}
                  currentSlide={this.state.slide}>
                  <div className={`${ilusWrapper} col-sm-6`}>
                     <Ilus1 viewBox="0 0 536 346" />
                  </div>
                  <article className={`${art} col-sm-5 offset-sm-1`}>
                     <Title>
                        Bookmark in one click
                     </Title>
                     <Text>
                        Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                     </Text>
                     <Button>
                        More info
                     </Button>
                  </article>
               </Slide>

               <Slide
                  id={2}
                  currentSlide={this.state.slide}>
                  <div className={`${ilusWrapper} col-sm-6`}>
                     <Ilus2 width="478" height="416" viewBox="0 0 478 416" />
                  </div>

                  <article className={`${art} offset-sm-1 col-sm-5`}>
                     <Title>
                        Intelligent search
                     </Title>
                     <Text>
                        Our powerful search feature will help you find saved sites in no time at all. No need to trawl throuhg all of your bookmarks.
                     </Text>
                     <Button>
                        More info
                     </Button>
                  </article>
               </Slide>

               <Slide
                  id={3}
                  currentSlide={this.state.slide}>
                  <div className={`${ilusWrapper} col-sm-6`}>
                     <Ilus3 viewBox="0 0 440 380" />
                  </div>

                  <article className={`${art} offset-sm-1 col-sm-5`}>
                     <Title>
                        Share your bookmarks
                     </Title>
                     <Text>
                        Easy share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                     </Text>
                     <Button>
                        More info
                     </Button>
                  </article>
               </Slide>

            </SlideWrapper>



         </section>
      );
   }
}

export default FeaturesSec;