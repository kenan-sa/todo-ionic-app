import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TodoFormValues } from '@/modules/home/components/ToDoForm';
import { fetchTodos, addTodo, deleteTodo } from '@/api/todoService';

type TodoState = {
    todos: TodoFormValues[];
    isLoading: boolean;
    error: string | null;
};

type TodoActions = {
    fetchAll: () => Promise<void>;
    addOne: (todo: TodoFormValues) => Promise<void>;
    removeOne: (todo: TodoFormValues) => Promise<void>;
};

type TodoStore = TodoState & {
    actions: TodoActions;
};

export const useTodoStore = create<TodoStore>()(
    persist(
        (set, get) => ({
            todos: [],
            isLoading: false,
            error: null,

            actions: {
                fetchAll: async () => {
                    set({ isLoading: true, error: null });
                    try {
                        const todos = await fetchTodos();
                        set({ todos });
                    } catch (err) {
                        set({ error: 'Failed to fetch todos' });
                    } finally {
                        set({ isLoading: false });
                    }
                },

                addOne: async (todo) => {
                    set({ isLoading: true, error: null });
                    try {
                        const newTodo = await addTodo(todo);
                        set((state) => ({
                            todos: [...state.todos, newTodo],
                        }));
                    } catch (err) {
                        set({ error: 'Failed to add todo' });
                    } finally {
                        set({ isLoading: false });
                    }
                },

                removeOne: async (todo) => {
                    try {
                        await deleteTodo(todo);
                        set((state) => ({
                            todos: state.todos.filter((t) => t.id !== todo.id),
                        }));
                    } catch (err) {
                        set({ error: 'Failed to remove todo' });
                    }
                },
            },
        }),
        {
            name: 'todo-storage', // localStorage key
        }
    )
);

// Selector hooks for components
export const useTodos = () => useTodoStore((state) => state.todos);

export const useTodoActions = () => useTodoStore((state) => state.actions);

export const useTodoLoading = () => useTodoStore((state) => state.isLoading);

export const useTodoError = () => useTodoStore((state) => state.error);
