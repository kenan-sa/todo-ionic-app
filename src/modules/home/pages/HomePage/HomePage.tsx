import React, { useCallback, useEffect, useState } from 'react';

import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonInput,
    IonSpinner,
} from '@ionic/react';

import {
    useTodoActions,
    useTodoLoading,
    useTodos,
    useTodoStore,
} from '@/store/todoZusStore';

import { ToDoForm, TodoFormValues } from '../../components/ToDoForm';
import { TodoList } from '../../components/ToDoForm/TodoList';

export const HomePage = () => {
    const todos = useTodos();

    const isLoading = useTodoLoading();

    const { addOne, removeOne, fetchAll } = useTodoActions();

    const handleAddTodo = useCallback(
        async (data: TodoFormValues) => {
            try {
                if (!data) return;

                // Create new todo without 'id'
                const newTodo = {
                    title: data.title,
                    description: data.description,
                };

                await addOne(newTodo); // Call the store's action
            } catch (error) {
                console.error('Error adding todo:', error);
            }
        },
        [addOne]
    );

    useEffect(() => {
        if (todos.length === 0) {
            fetchAll();
        }
    }, [todos]);

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

                {isLoading && (
                    <IonSpinner
                        name="crescent"
                        className="size-14"
                        color="primary"
                    ></IonSpinner>
                )}

                {!isLoading && (
                    <div className="overflow-y-auto">
                        <TodoList />
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};
