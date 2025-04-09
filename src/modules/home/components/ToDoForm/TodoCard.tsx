import React from 'react';

import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from '@ionic/react';

type Props = {
    title: string;
    description: string;
};

export const TodoCard = (props: Props) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle className="p-2">{props.title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>{props.description}</IonCardContent>

            <IonButton color="success" className="m-4">
                Done
            </IonButton>

            <IonButton color="danger">Delete</IonButton>
        </IonCard>
    );
};
