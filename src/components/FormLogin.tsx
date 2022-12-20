import { IonContent, IonRow, IonCol, IonIcon, IonItem, IonLabel, IonInput, IonButton, useIonAlert } from '@ionic/react'
import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router';

const FormLogin = () => {
  var emailRef = useRef<HTMLIonInputElement>(null);
  var mdpRef = useRef<HTMLIonInputElement>(null);
  const [presentAlert] = useIonAlert();
  const router = useHistory();

  function handleLogin() {
    const loginData = {
      email: emailRef.current?.value,
      mdp: mdpRef.current?.value,
    };

    const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(loginData),
    }

    function handleRoute(dataForm: any){
      var dataResponse = dataForm.data;
      var status = dataForm.status;
      if( status === "200" ){
        const token = dataResponse.token;
        localStorage.setItem('token', token);
        router.push('/airplaneList');
      } else {
        presentAlert({
          header: 'Erreur',
          message: dataForm.data,
          buttons: ['OK'],
      })
      }
    }
    fetch('https://webservicetps5-production.up.railway.app/navigate/signin', request).then(response => response.json())
    .then(data => { handleRoute(data); });
  }

  return (
    <IonContent className="ion-padding">
    <form>
        <IonRow>
            <IonCol>
            <IonItem>
                <IonLabel position="floating"> Email</IonLabel>
                <IonInput  type="email" ref={emailRef} value="admin@gmail.com" ></IonInput>
            </IonItem>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
            <IonItem>
                <IonLabel position="floating"> Pasword</IonLabel>
                <IonInput  type="password" ref={mdpRef} value="admin"></IonInput>
            </IonItem>
            </IonCol>
        </IonRow>
        <IonRow>
        <IonCol>
            <IonButton expand="block" onClick={handleLogin}>Login</IonButton>   
        </IonCol>
        </IonRow>
    </form>
    </IonContent>
  )
}

export default FormLogin