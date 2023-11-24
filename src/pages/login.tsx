import "../styles/index.css";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Login = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Login page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardContent>
            <form action="">
              <div className="col">
                <IonInput
                  label="username"
                  type="text"
                  fill="outline"
                  labelPlacement="floating"
                />
                <IonInput
                  label="password"
                  type="password"
                  fill="outline"
                  labelPlacement="floating"
                />
                <IonButton type="submit" expand="block">
                  login
                </IonButton>
              </div>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
