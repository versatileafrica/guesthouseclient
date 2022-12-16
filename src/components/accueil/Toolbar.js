import {IonContent, IonIcon, IonItem, IonList, IonPopover, IonTitle, IonToolbar } from '@ionic/react';
import {  personCircleOutline } from 'ionicons/icons';
import { useState } from 'react';
import './Toolbar.css';


const Toolbar = () => {
  const [width, setWindowWidth] = useState(window.innerWidth);

  
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  
  window.addEventListener("resize", updateDimensions);
  
  if(width < 1025){
    return (  
      <> 
          <IonToolbar color="violet1" className='toolbar_acc' >
            {/* <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons> */}
            <div id='toolbar_accueil'>
              <IonTitle class="ion-text-center title_accueil">Booking</IonTitle>
              <IonIcon id="popover-button" icon={personCircleOutline} button={true} color="light" />
            </div>
            <IonPopover trigger="popover-button" dismissOnSelect={true}>
              <IonContent>
                <IonList>
                  <IonItem lines='none' button={true} detail={false}>
                    Connexion
                  </IonItem>
                  <IonItem lines='none' button={true} detail={false}>
                    Inscription
                  </IonItem>
                </IonList>
              </IonContent>
            </IonPopover>
          </IonToolbar> 
      </>
  
    );
  } else {
    return (  
          <>
          {/* <div className='navbar' >
      
            <div className='navContainer'>
              <span className="title_accueil">Booking</span>
              
              <div className='navItems'>
               
                <IonButton color='light' className='navButton'>Register</IonButton>
                <IonButton color='light' className='navButton'>Login</IonButton>
              </div>
            </div>
          </div>  */}
            <IonToolbar color="violet1" className='toolbar_acc' >
              {/* <IonButtons slot="start">
                <IonMenuButton />
              </IonButtons> */}
              <div id='toolbar_accueil'>
                <IonTitle class="ion-text-center title_accueil">Booking</IonTitle>
                <IonIcon id="popover-button" icon={personCircleOutline} button={true} color="light" />
              </div>
              <IonPopover trigger="popover-button" dismissOnSelect={true}>
                <IonContent>
                  <IonList>
                    <IonItem lines='none' button={true} detail={false}>
                      Connexion
                    </IonItem>
                    <IonItem lines='none' button={true} detail={false}>
                      Inscription
                    </IonItem>
                  </IonList>
                </IonContent>
              </IonPopover>
            </IonToolbar> 
          </>
   
    );
  }
};

export default Toolbar;
