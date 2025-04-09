import React from 'react';

import { TodoFormValues } from './ToDoForm';
import { TodoCard } from './TodoCard';

export const TodoList = ({ todos }: { todos: TodoFormValues[] }) => {
    return (
        <div className="m-4 flex flex-col gap-4">
            {todos.map((todo, idx) => (
                <TodoCard
                    title={todo.title}
                    description={todo.description}
                    key={idx}
                />
            ))}
        </div>
    );
};
