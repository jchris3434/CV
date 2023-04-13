import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
// import { card, contactIcon } from "../style/contact.module.css";
import config from '../../config';

export default function Contact() {
  React.useEffect(() => {
    const element = document.getElementById("message");
    if (!element) return;

    setTimeout(() => {
      const message = "développeur";
      element.textContent = message;

      const delay = 300;
      const length = "développeur".length;
      const intervalId = setInterval(() => {
        const text = element.textContent;
        const newText = text.slice(0, text.length - 1);
        element.textContent = newText;
        if (newText.length === text.length - length) {
          clearInterval(intervalId);
        }
      }, delay);
    }, 2000);
  }, []);

return (
<section>
  <div className="card" style={{ width: "18rem" }}>
    <StaticImage src="../images/jc-juin.jpg" alt="Johny Walker" />
    <div className="card-body">
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
    </div>
  </div>
  <div>
    <p>Bonjour je suis à la recherche d'un poste de <span id="message"></span></p>    
  </div>  
</section>

);
}