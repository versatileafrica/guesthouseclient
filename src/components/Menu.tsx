import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { Link, useLocation } from 'react-router-dom';
import { homeOutline, storefrontOutline, personOutline, } from 'ionicons/icons';
import './Menu.css';


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Accueil',
    url: '/accueil',
    iosIcon: homeOutline,
    mdIcon: homeOutline
  },
  {
    title: 'Service Client',
    url: '/serviceclient',
    iosIcon: personOutline,
    mdIcon: personOutline
  }
];

const Menu: React.FC = () => {
  const location = useLocation();
  // let [ menuAffich, setMenuAffich] = useState('a');
  //  console.log(menuVal());
 
  return (
    <IonMenu contentId="menuContent" type="overlay" side='start'>
      <IonContent>
        <IonList id="inbox-list">
  
          {/* <IonListHeader>NomDuMedecin</IonListHeader>
          <IonNote>Dr xxx</IonNote> */}
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
        
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="end" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
        </IonList> 
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
