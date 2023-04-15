import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { card, contactIcon, imageBackg, sectionBox, coco, cocoTitle, avatar } from "../style/contact.module.css";
import config from '../../config';

export default function Contact() {

return (
<section className={sectionBox}>
  <div>
    <StaticImage 
      alt="image manquante"
      src="../images/back-contact.jpg"
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
      </div>
      {/* div footer avec les icones */}
      <div>
        <p>{config.socialLinks[0].icon}</p>
      </div>
    </div>
  </div>
</section>
);
}