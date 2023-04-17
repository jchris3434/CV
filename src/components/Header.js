// import * as React from "react"
import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image"
import Navbar from '../components/navbar'
import { mess1, mess2,} from "../style/header.module.css"

export default function Hero() {
  const [helloText, setHelloText] = useState("");
  const [walaaxyText, setWalaaxyText] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const helloIntervalId = setInterval(() => {
        setHelloText((prevText) => {
          if (prevText === "HELLO") {
            clearInterval(helloIntervalId);
            const walaaxyIntervalId = setInterval(() => {
              setWalaaxyText((prevText) => prevText + "WAALAXY".charAt(prevText.length));
              if (walaaxyText === "WAALAXY") {
                clearInterval(walaaxyIntervalId);
              }
            }, 250);
          }
          return prevText + "HELLO".charAt(prevText.length);
        });
      }, 250);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);



  return (
    <section>
      <div style={{ display: "grid" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
          style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
            margin: 0,
            marginTop: "-1rem",
            marginRight: 0
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src={
            "../images/photo2.jpg"
          }
          formats={["auto", "webp", "avif"]}
        />

        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "inline-block",
          }}
        >
          {/* Any content here will be centered in the component */}
          <Navbar />
          <p id="message1" className={mess1}>
            {helloText}
          </p>
          <p id="message2" className={mess2}>{walaaxyText}</p>
        </div>
      </div>
    </section>
  )
}