import React, { useRef } from "react";

import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

export const AppMenu = () => {
  const menuRef = useRef<HTMLIonMenuElement>(null);

  return (
    <>
      <IonMenu ref={menuRef} contentId="main" type="overlay" side="end">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>This is the menu content.</IonContent>
      </IonMenu>
    </>
  );
};
