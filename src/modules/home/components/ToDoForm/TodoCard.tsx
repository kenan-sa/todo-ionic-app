import React, { use, useCallback } from 'react';

import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from '@ionic/react';
import { useTodoActions } from '@/store/todoZusStore';
import { TodoFormValues } from './ToDoForm';

type Props = {
    todo: TodoFormValues;
};

export const TodoCard = (props: Props) => {
    const todo = props.todo;

    const { removeOne } = useTodoActions();

    const handleDeleteTodo = useCallback(async () => {
        removeOne(todo);
    }, [todo, removeOne]);

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle className="p-2">{todo.title}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>{todo.description}</IonCardContent>

            <IonButton color="success" className="m-4">
                Done
            </IonButton>

            <IonButton color="danger" onClick={handleDeleteTodo}>
                Delete
            </IonButton>
        </IonCard>
    );
};
