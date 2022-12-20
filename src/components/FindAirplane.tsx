import { IonContent } from "@ionic/react";
import React,{useEffect, useState} from "react";
import { useHistory, useParams } from "react-router";
import AirplaneDetail from "../pages/airplaneDetail/AirplaneDetail";

const FindAirplane: React.FC = () => {   
    const {id} = useParams<any>();
    const [airplane,setairplane]: any[] = useState([]);
    const token = localStorage.getItem('token');

    const callVehicule = () => {
        const request = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        }
        
        function handleData(vehicule: any){
            var dataResponse = vehicule.data.body;
            setairplane(dataResponse);
        }
    
        fetch('https://webservicetps5-production.up.railway.app/flotte/avion/'+id, request).then(response => response.json())
        .then(data => { handleData(data); });
    } 
    useEffect( () => {
        callVehicule();
    },[]);
    
    return <AirplaneDetail airplane={airplane}></AirplaneDetail>
}

export default FindAirplane;