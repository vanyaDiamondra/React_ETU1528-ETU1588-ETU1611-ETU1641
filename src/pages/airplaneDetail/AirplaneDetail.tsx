import React, { useState } from "react";
import { IonContent,IonPage,IonItem,IonTitle,IonHeader,IonToolbar, IonThumbnail, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonLabel, IonIcon, IonButton } from "@ionic/react";
import { Categorie } from "../../components/Categorie";
import { airplane } from 'ionicons/icons';
import { Camera,CameraOptions} from "@awesome-cordova-plugins/camera";

type Airplane = {
    airplane: {
        id: number,
        photo: string,
        immatriculation: string,
        dateobtention: string,
        puissance: number,
        categorie: Categorie,
        etatphysique: string,
        distance: number,
        carburantdepense: number
    }
}

const AirplaneDetail = (data: Airplane) => {

const [imgurl,setimgurl]: any = useState('');

const getCamera = () => {
    const options: CameraOptions ={
      sourceType: Camera.PictureSourceType.CAMERA,
      destinationType: 0,
      quality: 100,      
      correctOrientation: true
    }

    Camera.getPicture(options)
    .then(res => {
      console.log(res);
      let url = 'data:image/jpeg;base64,' +res;
      setimgurl(url);
    } )
    .catch( e => console.log(e));

}


const getGallery = () => {
    const options: CameraOptions = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,      
      destinationType: 0,
      quality: 100,
      encodingType: Camera.EncodingType.JPEG,      
      correctOrientation: true,

    }

    Camera.getPicture(options)
    .then(res => {
      console.log(res);
      let url = 'data:image/jpeg;base64,' +res;
      setimgurl(url);
    } )
    .catch( e => console.log(e));
}

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle><IonIcon icon={airplane} />Airplane details</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonItem>
                    <IonThumbnail slot="start">
                        <IonImg src={imgurl} />
                        <IonButton onClick={getCamera}>Prendre une Photo</IonButton>
                        <IonButton onClick={getGallery}>Choisir Image</IonButton>
                    </IonThumbnail>
                    <IonLabel>
                        <h3>Immatriculation : {data.airplane.immatriculation}</h3>
                        <p>Puissance {data.airplane.puissance}</p>
                        <p>Date obtention {data.airplane.dateobtention}</p>
                        <p>Etat physique <b>{data.airplane.etatphysique}</b> </p>
                        <p>Kilometrage effectué <b>{data.airplane.distance}</b> </p>
                    </IonLabel>
                </IonItem>
            </IonContent>
        </IonPage>
    );
}

export default AirplaneDetail;