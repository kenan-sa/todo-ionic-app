import React from 'react';

import { TodoFormValues } from './ToDoForm';
import { TodoCard } from './TodoCard';
import { useTodos } from '@/store/todoZusStore';

export const TodoList = () => {
    const todos = useTodos();

    return (
        <div className="m-4 flex flex-col gap-4">
            {todos.map((todo, idx) => (
                <TodoCard todo={todo} key={idx} />
            ))}
        </div>
    );
};
