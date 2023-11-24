import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Register = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registration Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form>
          <div className="col">
            <div className="row">
              <label htmlFor="username">username</label>
            </div>
            <div className="row">
              <input type="text" name="username" id="username" />
            </div>
            <div className="row">
              <label htmlFor="email">Email</label>
            </div>
            <div className="row">
              <input type="email" name="email" id="email" />
            </div>
            <div className="row">
              <label htmlFor="password">Password</label>
            </div>
            <div className="row">
              <input type="password" name="password" id="password" />
            </div>
            <div className="row">
              <button>submit</button>
            </div>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Register;
