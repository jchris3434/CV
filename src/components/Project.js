import * as React from "react";
import StageVideo from "../images/stage.mp4";
import { StaticImage } from "gatsby-plugin-image";
import { video, container, imageBackg, content, titleFullWidth, paragFullWidth1, paragFullWidth2
 } from "../style/project.module.css";

export default function Project() {
    
return (
    <section>
        <div className={container} style={{position: "relative"}}>           
            <StaticImage 
            alt="image manquante"
            style={{position: "absolute", zIndex: "1"}} 
            src="../images/projetFond.jpg"
            className={imageBackg} />
            <h3 className={titleFullWidth} style={{position: "relative", zIndex: "2"}}>Projet d'application de gestion de clients</h3>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <p className={paragFullWidth1} style={{position: "relative", zIndex: "2"}}>
                    Back réalisé en Node.js + Feather.js pour l'API
                </p>
                <p className={paragFullWidth2} style={{position: "relative", zIndex: "2"}}>
                    Front réalisé avec Quasar-VueJS + Pinia
                </p>
            </div>
            <video className={`embed-responsive embed-responsive-16by9 ${video} ${content}`} controls>
                <source className="embed-responsive-item" src={StageVideo} type="video/mp4" />
            </video>
    
        </div>
    </section>
)
}