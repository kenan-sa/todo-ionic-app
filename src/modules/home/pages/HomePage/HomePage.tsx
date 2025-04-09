import React, { useCallback, useState } from 'react';

import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonInput,
} from '@ionic/react';
import { ToDoForm, TodoFormValues } from '../../components/ToDoForm';
import { TodoList } from '../../components/ToDoForm/TodoList';

export const HomePage = () => {
    const [todos, setTodos] = useState<Array<TodoFormValues>>([]);

    const handleAddTodo = useCallback((data: TodoFormValues) => {
        if (!data) return;

        const newTodo = {
            ...data,
            id: Date.now(),
        };

        setTodos((prev) => [...prev, newTodo]);
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="end">
                        <IonMenuButton />
                    </IonButtons>

                    <IonTitle>
                        <h1 className="text-xl font-bold">To Do App</h1>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent
                fullscreen
                className="flex flex-col items-center justify-center"
            >
                <ToDoForm onAdd={handleAddTodo} />

                <div className="overflow-y-auto">
                    <TodoList todos={todos} />
                </div>
            </IonContent>
        </IonPage>
    );
};
