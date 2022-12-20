import { IonContent, IonTabBar, IonTabButton, IonIcon, IonToolbar, IonLabel, IonHeader, IonTitle, useIonAlert } from '@ionic/react'
import Header from '../../components/Header'
import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router';
import FormLogin from '../../components/FormLogin';
import { time} from 'ionicons/icons';

const Assurance = () => {
  return (
    <IonContent className="ion-padding">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Assurance expiration</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/assuranceOneMonth">
            <IonIcon icon={time} />
            <IonLabel>In one month</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/assuranceThreeMonth">
            <IonIcon icon={time} />
            <IonLabel>In three month</IonLabel>
          </IonTabButton>
        </IonTabBar>
    </IonContent>
  )
}

export default Assurance