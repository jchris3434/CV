import * as React from "react";
import StageVideo from "../images/stage.mp4";
import { StaticImage } from "gatsby-plugin-image";
import { video, video2, container, container2, imageBackg, content, fontF1, fontF2, stackBG, separator
 } from "../style/project.module.css";

export default function Project() {
    
return (
    <section>
        <div className={container}>            
            <StaticImage 
            alt="image manquante"
            style={{position: "absolute"}} 
            src="../images/projet3.jpg"
            className={imageBackg} />
            <video className={`embed-responsive embed-responsive-16by9 ${video} ${content}`} controls>
                <source className="embed-responsive-item" src={StageVideo} type="video/mp4" />
            </video>     
        </div>
        <div className={container2}>
            <StaticImage
                className={`${container2}`}
                src="../images/projet1.jpg"
                alt="Ma photo"
                style={{ maxWidth: "100%", marginBottom: "1rem", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
            />
            <div className={stackBG}>
                <p className={fontF1}>Back : Node.js + Feathers.js</p>
                <p className={fontF2}>Front : Quasar-VueJS + Pinia</p>
            </div>
            <video className={`embed-responsive embed-responsive-16by9 ${video2}`} controls>
                <source className="embed-responsive-item" src={StageVideo} type="video/mp4" />
            </video>
            <hr className={separator} />
        </div> 
    </section>
)
}