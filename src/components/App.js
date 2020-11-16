import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "components/App.scss";
import ContactPage from "components/pages/ContactPage";
import FeaturesPage from "components/pages/FeaturesPage";
import HomePage from "components/pages/HomePage/HomePage";
import PricingPage from "components/pages/PricingPage";
import { HashRouter, Route, Switch } from "react-router-dom";
import "components/variables.scss";


function App() {
   return (
      <HashRouter>
         <>
            <Switch>
               <Route
                  exact
                  path="/"
                  component={HomePage} />
               <Route
                  path="/features"
                  component={FeaturesPage} />
               <Route
                  path="/pricing"
                  component={PricingPage} />
               <Route
                  path="/contact"
                  component={ContactPage} />
            </Switch>
         </>
      </HashRouter>
   );
}


export default App;