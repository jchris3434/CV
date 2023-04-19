import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { card, socialIcons, imageBackg, sectionBox, coco, cocoTitle, avatar, iconCircle } from "../style/contact.module.css";
import config from '../../config';

export default function Contact() {

return (
<section id="contact" className={sectionBox}>
  <div>
    <StaticImage 
      alt="image manquante"
      src="../images/star2.jpg"
      className={imageBackg}
    />

    <div className={card}>
      <StaticImage
        className={avatar} 
        src="../images/avatar-jc-4.png"
        alt="Johny Walker" />
      <div className={`card-body`}>
        <h1 className={`${coco} ${cocoTitle} card-text`}>{config.authorName}</h1>
        <p className={`${coco} card-text`}>{config.heading}</p>
        {/* div footer avec les icones */}
      <div className={socialIcons}>
        <div className={iconCircle}>
          <a className={"fab fa-github"} href={config.socialLinks[0].url} aria-label="Lien vers le profil GitHub"></a>
        </div>
        <div className={iconCircle}>
          <a className={"fab fa-linkedin"} href={config.socialLinks[1].url} aria-label="Lien vers le profil Linkedin"></a>
        </div>        
        <div className={iconCircle}>
          <a className={"far fa-envelope"} href={config.socialLinks[2].url} aria-label="Lien vers email"></a>  
        </div>        
      </div>
      </div>

      
    </div>
  </div>
</section>
);
}