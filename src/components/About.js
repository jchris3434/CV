import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { textJC, textName, imageET, separator, policeTitle, about, cuerpo,textContainer
 } from "../style/about.module.css";

export default function About() {
return (
<div className={`${cuerpo} row`} style={{ display: "flex", alignItems: "center" }}>
<StaticImage
    class={`${imageET} col-sm-12 col-md-2 img-thumbnail mx-auto`}
    src="../images/jc-juin.jpg"
    alt="Ma photo"
    width={400}
    style={{ maxWidth: "40%", marginRight: "1rem", marginBottom: "1rem" }}
/>

  <div className={`${textJC} col-md-8 col-12`}>
    <h4 className={`${about} ${policeTitle}`}>A Propos de moi</h4>
    <h1 className={`${textName} ${policeTitle}`}>Jean-Christophe Fontaine</h1>
    <hr className={separator} />
    <div className={textContainer}>
        <p>Après plusieurs années passées dans l'industrie hôtelière de luxe à travers le monde, j'ai décidé de revenir à Montpellier et entrepris des études en développement informatique à l'école Beweb. J'ai ainsi <strong>obtenu mon titre de développeur web & web mobile</strong>.</p>
        <p>Je suis actuellement à la recherche d'un contrat de professionnalisation pour continuer en <strong>Bachelor DEVOPS : Concepteur et Développeur d'Application</strong>. Niv6 <strong>ou d’un premier poste junior</strong> !</p>
        <p>Au cours de ma formation, j'ai eu l'opportunité d'apprendre différents langages (voir section Technique). J'ai également effectué un stage chez Osmova, où j'ai travaillé avec <strong>node.js (+feathers.js pour l'API)</strong> pour le back-end et <strong>Quasar (framework Vue.js) et Pinia</strong> pour le front-end, dans le cadre de la réalisation d'une application de gestion de clients et devis. Aperçu dans la section Dernier Projet.</p>
    </div>

    <hr className={separator} />
  </div>
</div>

)
}