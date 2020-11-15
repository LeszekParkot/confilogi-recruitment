import React from "react";
import { ReactComponent as LogoChrome } from "assets/logos/logo-chrome.svg";
import { ReactComponent as LogoFirefox } from "assets/logos/logo-firefox.svg";
import { ReactComponent as LogoOpera } from "assets/logos/logo-opera.svg";
import Button from "components/partials/Button/Button";
import Header from "components/partials/Header/Header";
import Text from "components/partials/Text/Text";
import Title from "components/partials/Title/Title";
import { downloadSec, browsersWrapper, browsersItem, logo, add, install, wrapperCol } from "./DownloadSec.module.scss";




function DownloadSec() {
   return (
      <section className={`${downloadSec} container`}>
         <Header>
            <Title>
               Download the extension
            </Title>
            <Text>
               We'we got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
            </Text>
         </Header>


         <div className={`${browsersWrapper} row`}>

            <div className={`${wrapperCol} col-sm-4`}>
               <div className={`${browsersItem} align-self-start`}>
                  <LogoChrome className={logo} />
                  <p className={add}>
                     Add to Chrome
                  </p>
                  <Text>
                     Minimum version 62
                  </Text>
                  <div className={install}>
                     <Button>
                        Add & Install Extension
                     </Button>
                  </div>
               </div>
            </div>

            <div className={`${wrapperCol} col-sm-4`}>
               <div className={`${browsersItem} align-self-center`}>
                  <LogoFirefox className={logo} />
                  <p className={add}>
                     Add to Firefox
                  </p>
                  <Text>
                     Minimum version 55
                  </Text>
                  <div className={install}>
                     <Button>
                        Add & Install Extension
                     </Button>
                  </div>
               </div>
            </div>

            <div className={`${wrapperCol} col-sm-4`}>
               <div className={`${browsersItem} align-self-end`}>
                  <LogoOpera className={logo} />
                  <p className={add}>
                     Add to Opera
                  </p>
                  <Text>
                     Minimum version 46
                  </Text>
                  <div className={install}>
                     <Button>
                        Add & Install Extension
                     </Button>
                  </div>
               </div>
            </div>

         </div>

      </section>
   );
}

export default DownloadSec;