import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import AirplaneList from './pages/airplaneList/Liste';
import Login from './pages/login/Login'
import FindAirplane from './components/FindAirplane';
import Assurance from './pages/assurance/Assurance';
import ListThreeMonth from './pages/airplaneExpired/ThreeMonth/Liste';
import ListOneMonth from './pages/airplaneExpired/OneMonth/Liste';

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
;
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/"><Login /></Route>
        <Route exact path="/airplaneList"><AirplaneList/></Route>
        <Route path="/airplaneDetail/:id"><FindAirplane/></Route>
        <Route path="/assurance"><Assurance/></Route>
        <Route path="/assuranceOneMonth"><ListOneMonth/></Route>
        <Route path="/assuranceThreeMonth"><ListThreeMonth/></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
