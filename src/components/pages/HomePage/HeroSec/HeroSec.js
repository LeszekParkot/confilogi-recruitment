import React from "react";
import { ReactComponent as ImgHero } from "assets/ilustrations/illustration-hero.svg";
import Button from "components/partials/Button/Button";
import Text from "components/partials/Text/Text";
import Title from "components/partials/Title/Title";
import { section, bgFigure, contentWrapper, imgHero, article, btnsWrapper } from "./HeroSec.module.scss";


function HeroSec() {
   return (
      <section className={section}>
         <div className={`${contentWrapper} container`}>
            <div className="row">

               <article className={`${article} col-sm-5`}>
                  <Title primary>
                     A Simple Bookmark Manager
                  </Title>
                  <Text>
                     A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                  </Text>
                  <div className={btnsWrapper}>
                     <Button>
                        Get it on Chrome
                     </Button>
                     <Button light>
                        Get it on Firefox
                     </Button>
                  </div>
               </article>

               <div className="col-sm-7">
                  <ImgHero
                     className={imgHero}
                     viewBox="0 0 657 466" />
               </div>

            </div>
         </div>

         <div className={bgFigure}></div>
      </section>
   );
}


export default HeroSec;