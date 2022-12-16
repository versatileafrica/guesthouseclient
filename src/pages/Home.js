import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonGrid, IonCol, IonItem, IonInput, IonLabel, IonCard, IonCardContent, IonNav, IonNavLink, IonRouterLink, IonRoute, IonMenu, IonList, IonMenuToggle, IonPopover, IonIcon, IonButtons, IonMenuButton, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { add } from 'ionicons/icons';
import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';
import Imgslide from '../components/home/Imgslide';
import Articles from '../components/home/Articles';


const Home = () => {
  
  
  return (  
    
    <IonPage> 
      <IonHeader>
        <IonToolbar color="primary" >
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle class="ion-text-center">Gestion médical</IonTitle>
        </IonToolbar> 
        
      </IonHeader>
      <IonContent fullscreen  >
        <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Home</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonCard className='card'>
          <IonButton routerLink='/enregistrer' color='success' className='bouton1'><IonIcon icon={add} />Ajouter un patient</IonButton>
          <IonButton routerLink='/patient' color='dark' className='bouton2'>Gérer les patients</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>

  );
};

export default Home;
