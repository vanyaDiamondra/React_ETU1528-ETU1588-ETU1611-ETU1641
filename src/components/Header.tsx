import { IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/react';
import React from 'react';
import { airplane } from 'ionicons/icons';

type Props = {}

const Header = (props: Props) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle><IonIcon icon={airplane} /> Air</IonTitle>
      </IonToolbar>
    </IonHeader>
  )
}

export default Header