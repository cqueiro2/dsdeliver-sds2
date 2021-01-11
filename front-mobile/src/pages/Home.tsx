import {
   IonButton, 
   IonCol, 
   IonContent, 
   IonGrid, 
   IonHeader, 
   IonIcon, 
   IonImg, 
   IonLabel, 
   IonPage, 
   IonRow, 
   IonText, 
   IonTitle, 
   IonToolbar
   } from '@ionic/react';
import React from 'react';
import {  } from 'ionicons/icons'

import './Home.css';

const Home: React.FC = () => {
  
  const handleOnPress = () => {

  }

  return (
    
    <IonPage>    
       <IonHeader>
        <IonToolbar color="delivery">        
        <IonRow className="ion-text-center">  
          <IonTitle  size="small">    
            <IonCol className="ion-align-items-left"> 
              <IonIcon size="large" src='./assets/logo.svg'></IonIcon>                    
              </IonCol>  
              DS Delivery  
          </IonTitle> 
          </IonRow>                                       
        </IonToolbar> 
        <IonGrid>
        <IonRow>
            <IonCol>
                
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                <IonImg src="./assets/deliveryman.png"></IonImg>
            </IonCol>
          </IonRow>
          
        <IonRow>
            <IonCol>
                
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                  <IonText className="ion-text-center">
                   <h3> <p>Acompanhe os pedidos e entregue no prazo!</p> </h3>
                  </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonText >
                Receba todos os pedidos do seu <br/> restaurante na palma da sua mão
              </IonText>
            </IonCol>
            </IonRow>     
              <IonRow >                          
               <IonCol className="ion-text-center" >
                 <IonCol >
                 
                <IonButton color="delivery">VER PEDIDOS</IonButton>
             
                </IonCol>
              </IonCol>
              </IonRow>
              
           
      </IonGrid>      
      </IonHeader>           
      
  
     
    </IonPage>
  );
};

export default Home;
