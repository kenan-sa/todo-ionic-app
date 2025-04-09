import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { IonButton, IonInput } from '@ionic/react';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type Props = {
    onAdd: (data: TodoFormValues) => void;
};

export const ToDoForm = ({ onAdd }: Props) => {
    const todoValidationSchema = useMemo(
        () =>
            Yup.object({
                title: Yup.string().required('Title is required'),
                description: Yup.string().required('Description is required'),
            }),
        []
    );

    const frm = useForm<TodoFormValues>({
        mode: 'onChange',
        resolver: yupResolver(todoValidationSchema),
        defaultValues: {
            title: '',
            description: '',
        },
    });

    useEffect(() => {
        frm.reset();
    }, []);

    const onSubmit = useCallback(
        (data: TodoFormValues) => {
            onAdd(data);

            frm.reset();
        },
        [frm]
    );

    return (
        <>
            <form onSubmit={frm.handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center justify-center gap-2 mx-7 my-2">
                    <IonInput
                        placeholder="Enter Todo Title"
                        className="w-full rounded-2xl bg-blue-300"
                        {...frm.register('title')}
                        onIonChange={(e) => {
                            frm.setValue('title', e.detail.value!);
                        }}
                        fill="solid"
                        labelPlacement="floating"
                        label="Title"
                        required
                    />

                    {frm.formState.errors.title && (
                        <span className="text-red-500">
                            {frm.formState.errors.title.message}
                        </span>
                    )}

                    <IonInput
                        placeholder="Enter Todo Description"
                        className="w-full rounded-2xl bg-blue-300"
                        {...frm.register('description')}
                        onIonChange={(e) => {
                            frm.setValue('description', e.detail.value!);
                        }}
                        fill="solid"
                        labelPlacement="floating"
                        label="Description"
                        required
                    />

                    {frm.formState.errors.description && (
                        <span className="text-red-500">
                            {frm.formState.errors.description.message}
                        </span>
                    )}

                    <IonButton className="" type="submit">
                        Add
                    </IonButton>
                </div>
            </form>
        </>
    );
};

export type TodoFormValues = {
    id?: number;
    title: string;
    description: string;
};
