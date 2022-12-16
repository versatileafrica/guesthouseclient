import "./MailList.css";
import { IonButton, IonInput } from "@ionic/react";

const MailList = ()=> {
    
    return(
        <div className="mail">
            <h1 className="mailTitle">Gagnez du temps, gagnez de l'argent!</h1>
            <span className="mailDesc">Inscrivez-vous et nous vous enverrons la meilleur offre</span>
            <div className="mailInputContainer">
                <IonInput placeholder="Votre Email" mode="ios" className="mailInput" clearInput/>
                <IonButton mode="ios" color="bleunuit" className="subscribeBtn">Souscrire</IonButton>
            </div>
            
        </div>
    )
};

export default MailList;