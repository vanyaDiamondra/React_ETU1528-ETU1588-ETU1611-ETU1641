import React, { useEffect,useState } from "react";
import { IonContent,IonPage,IonThumbnail,IonTitle,IonHeader,IonToolbar, IonImg, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import { Categorie } from "./Categorie";
import { useHistory } from 'react-router';

type AirPlanesProps = {
    data: {
        id: number,
        photos: string,
        immatriculation: string,
        dateobtention: Date,
        puissance: number,
        designation: string,
        etatPhysique: string,
        etatAssurance: string,
        categorie: Categorie
    }[]
}

const AirPlanes = (airplanes: AirPlanesProps) => {
    const router = useHistory();
    function toDetail(id:number){
        router.push('/airplaneDetail/'+id);
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>AirPlanes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

            { airplanes.data.map(airplane => {
                return (
                    <IonCard color="light ">
                        <IonCardHeader>
                        <IonThumbnail slot="start">
                            <IonImg src={"/assets/images/"+airplane.photos} />
                        </IonThumbnail>
                            <IonCardTitle>{airplane.immatriculation}</IonCardTitle>
                            <IonCardSubtitle>{airplane.categorie.nom}</IonCardSubtitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <p>{airplane.puissance} ch</p> 
                            <p>{airplane.etatPhysique}</p>
                            <p>Assurance: {airplane.etatAssurance}</p>
                        </IonCardContent>
                        <IonButton onClick={() => toDetail(airplane.id)}  fill="outline">See details</IonButton>
                    </IonCard>
                )
            }) }
            </IonContent>
        </IonPage>
    );
}

export default AirPlanes;