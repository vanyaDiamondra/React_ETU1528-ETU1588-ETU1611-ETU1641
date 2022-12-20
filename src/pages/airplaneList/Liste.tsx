import { IonContent, IonButton } from "@ionic/react";
import React,{ useEffect, useState} from "react";
import AirPlanes from "../../components/AirPlanes";
import { useHistory } from 'react-router';

const AirplaneList: React.FC = () => {
    const [airplane,setairplane]: any[] = useState([]);
    const router = useHistory();

    const fetchvehicule = async () => {
        fetch("https://webservicetps5-production.up.railway.app/flotte/avion",{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }).then( response => response.json())
        .then((data) => {
            setairplane(data["data"]);
        })
        .catch((err) => {
            console.log(err.message);
        });    
    } 

    function seeAssurance(){
        router.push('/assurance');
    }

    useEffect( () => {
        fetchvehicule();
    },[]);

    return (
        <IonContent>
            <IonButton onClick={seeAssurance}>Assurance</IonButton>
            <AirPlanes data={airplane}></AirPlanes>
        </IonContent>
    );
}

export default AirplaneList;