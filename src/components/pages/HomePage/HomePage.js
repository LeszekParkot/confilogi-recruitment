import React from "react";
import Layout from "components/Layout/Layout";
import Contact from "./Contact/Contact";
import DownloadSec from "./DownloadSec/DownloadSec";
import FeaturesSec from "./FeaturesSec/FeaturesSec";
import HeroSec from "./HeroSec/HeroSec";
import QuestionsSec from "./QuestionsSec/QuestionsSec";


// function HomePage() {
class HomePage extends React.Component {

   state = {
      isMobileNavOpen: false
   }

   openMobileNav = () => {
      this.setState({
         isMobileNavOpen: true
      })
   }

   closeMobileNav = () => {
      this.setState({
         isMobileNavOpen: false
      })
   }

   render() {
      return (
         <Layout
            open={this.openMobileNav}
            close={this.closeMobileNav}
            isOpen={this.state.isMobileNavOpen}>
            <main>
               <HeroSec />
               <FeaturesSec />
               <DownloadSec />
               <QuestionsSec />
               <Contact />
            </main>
         </Layout>
      );
   }


}

export default HomePage;