import { IonContent, IonRow, IonCol, IonIcon, IonItem, IonLabel, IonInput, IonButton, useIonAlert } from '@ionic/react'
import Header from '../../components/Header'
import FormLogin from '../../components/FormLogin';


const Login = () => {
  return (
    <IonContent className="ion-padding">
      <Header />
      <FormLogin></FormLogin>
    </IonContent>
  )
}

export default Login