import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { paddingDate, sectionText, cvTitle, policeTitle, curry, separator, technos, hobby, separator2 } from "../style/experiences.module.css";

export default function Experiences() {
    return (
    <section className={sectionText}>
        <h3 className={`${cvTitle} ${policeTitle}`}>Curriculum Vitae</h3>
        <div class="row">
            <div className={`${curry} col-4`}>
                <p className={paddingDate}> VITAE</p>
            </div>
            <div class="col">
                <h2>Formations</h2>
                <div>
                    <p className={paddingDate}>Ecole BEWEB Montpellier - Titre Pro Niv5 Développeur Web & Web Mobile</p>
                    <p>Mai 2022 - Mars 2023</p>
                </div>
                <div>
                    <p className={paddingDate}>LYCEE LA COLLINE - Bac Professionnel d'Hôtellerie Restauration</p>
                    <p>2006 - 2008</p>
                </div>
                <div>
                    <p className={paddingDate}>LYCEE LA COLLINE - BEP Hôtellerie Restauration</p>
                    <p>2004 - 2006</p>
                </div>
            </div>
            <div class="col">
                <h2>Expériences Digitales</h2>
                <div>
                    <h4>Développeur Full Stack | Montpellier</h4>
                    <p>Osmova - Agence Digitale | Stage 2 mois | 2023</p>
                    <p className={paddingDate}>Création d'une application de gestion de clients et création de devis</p>
                    <p className={paddingDate}>avec Node.JS 16 (+ Feather.js pour l'API) en back</p>
                    <p>et Quasar-Vue.js 3 en front (+Orm Pinia pour gestionnaire d'état)</p>
                </div>
            </div>                       
        </div>
        <div class="row">
        <div className={`${curry} col-4`}>
            <p className={paddingDate}>CURRICULUM</p>
        </div>
            <div class="col">
                <h2>Softs Skills</h2>
                <div>
                    <p className={paddingDate}>Langues</p>
                    <ul>
                        <li>Français (Maternelle)</li>
                        <li>Anglais (Courant)</li>
                        <li>Espagnol (Courant)</li>
                    </ul>
                    <p className={paddingDate}>Esprit d'analyse</p>
                    <p className={paddingDate}>Travail en équipe</p>
                    <p className={paddingDate}>Sens de l'organisation, Rigueur</p>
                    <p className={paddingDate}>Curiosité</p>
                    <p>Autonomie</p>
                </div>
                <div class="row">
            <div  class="col-5">
                <h2>Loisirs</h2>
                <div class="row">
                    <p className={`${hobby} col`}>Badminton</p>
                    <p className={`${hobby} col`}>Voyages</p>
                </div>
                <div class="row">
                    <p className={`${hobby} col`}>Cuisine</p>
                    <p className={`${hobby} col`}>Poker</p>
                </div>
            </div>           
            </div>
            </div>
            <div class="col">
                <h2>Expériences Antérieures</h2>
                <div>
                    <p className={paddingDate}>L'accoudoir | Montpellier 2019-2021</p>
                    <p>Responsable de Salle</p>
                    </div>
                    <div>
                    <p className={paddingDate}>Grand Hôtel Suisse Majestic**** | Montreux, Suisse 2018 - 2017</p>                    
                    <p>Chef de rang</p>
                    </div>
                    <div>
                    <p className={paddingDate}>Eden Palace **** | Montreux, Suisse 2016 - 2012</p>
                    <p>Chef de rang</p>
                    </div>
                    <div>
                    <p className={paddingDate}>Crowne Plaza**** | Montpellier été 2011</p>
                    <p>Barman</p>
                    </div>
                    <div>
                    <p className={paddingDate}>Restaurant Paul Bocuse | Etats-Unis, Floride 2011 - 2009</p>
                    <p>Chef de rang</p>
                    </div>
                    <div>
                    <p className={paddingDate}>Le Sport's | Champéry, Suisse Hiver 2008</p>
                    <p>Barman</p>
                    </div>
            </div>       
        </div>
        <div>
            <hr className={separator} />       
            <StaticImage className={technos} src="../images/technos.jpg" alt="technos" />
            <hr className={`${separator2} hr hr-blurry`} />
        </div>
        
    </section>    
        
        
    )
    }