import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import { cartOutline, homeOutline, personOutline, receiptOutline, storefrontOutline } from 'ionicons/icons';
// import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//redux-toolkit
import { useDispatch } from 'react-redux';
import { recupCity, recupHouse } from './feature/HouseSlice';
import { useEffect} from 'react';
// import { CartProvider } from "react-use-cart";

//importation des pages
import Accueil from './pages/Accueil';
// import Accuei from './pages/pa/Accueil';
import ListHotel from './pages/ListHotel';
import AppartDetails from './pages/AppartDetails';
import Upload from './pages/Upload';
import SearchAppart from './components/accueil/SearchAppart';
// import GoesPay from './pages/pa/GoesPay';
// import ProductionLocale from './pages/pa/ProductionLocale';
// import SaveursGoes from './pages/pa/SaveursGoes';
// import SublimeGoes from './pages/pa/SublimeGoes';
// import AboutUs from './pages/pa/AboutUs';

// const Accueil = lazy(() => import('./pages/Accueil'));
// const ListHotel = lazy(() => import('./pages/ListHotel'));
// const Upload = lazy(() => import('./pages/Upload'));
// const AppartDetails = lazy(() => import('./pages/AppartDetails'));
// const SearchAppart = lazy(() => import('./components/accueil/SearchAppart'));


setupIonicReact();

const App = () => {
  const dispatch = useDispatch();
  // const historique = useSelector((state) => state.panier.historique);

  useEffect(() => {
      getHouse();
      getCity();
  }, []);

  const getHouse = ()=>{
    fetch('https://backend-guesthouse.benindigital.com/gethouse').then((res) => {
      const data = res.json()
      return data
    }).then((data) => {
      dispatch(recupHouse(data));
    })
  };
  const getCity = ()=>{
    fetch('https://backend-guesthouse.benindigital.com/getCity').then((res) => {
      const data = res.json()
      return data
    }).then((data) => {
      dispatch(recupCity(data));
    })
  };
  
  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonSplitPane contentId="menuContent" > */}
          {/* <Menu />  */}
          {/* <IonTabs> */}
          {/* <Suspense fallback={<h3>Chargement...</h3>}> */}

            <IonRouterOutlet id="menuContent">
              {/* <CartProvider> */}
              <Route exact path="/accueil">
                <Accueil />
              </Route>
              <Route exact path="/listHotel">
                <ListHotel />
              </Route>
              <Route exact path="/ajoutHouse">
                <Upload />
              </Route>
              <Route exact path="/appartDetail/:id">
                <AppartDetails />
              </Route>
              <Route exact path="/searchappart">
                <SearchAppart />
              </Route>
              <Route exact path="/">
                <Redirect to="/accueil" />
              </Route>
              {/* <Route exact path="/accuei">
                <Accuei />
              </Route>
              <Route exact path="/goespay">
                <GoesPay />
              </Route>
              <Route exact path="/productionlocale">
                <ProductionLocale />
              </Route>
              <Route exact path="/saveursgoes">
                <SaveursGoes />
              </Route>
              <Route exact path="/sublimegoes">
                <SublimeGoes />
              </Route>
              <Route exact path="/aboutus">
                <AboutUs />
              </Route> */}
              {/* </CartProvider> */}
            </IonRouterOutlet>
          {/* </Suspense> */}
            
            {/* <IonTabBar slot="bottom">
              <IonTabButton tab="accueil" href="/accueil">
                <IonIcon icon={homeOutline} />
                <IonLabel>Accueil</IonLabel>
              </IonTabButton>
              <IonTabButton tab="historique" href="/historique">
                <IonIcon icon={receiptOutline} />
                <IonLabel>Historique</IonLabel>
              </IonTabButton>
              <IonTabButton tab="serviceclient" href="/serviceclient">
                <IonIcon icon={personOutline} />
                <IonLabel>Service Client</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profil" href="/profil">
                <IonIcon icon={personOutline} />
                <IonLabel>Mon Compte</IonLabel>
              </IonTabButton>
            </IonTabBar> */}
          {/* </IonTabs> */}
        {/* </IonSplitPane> */}
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
