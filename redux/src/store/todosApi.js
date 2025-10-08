import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
        }),
        getTodoById: builder.query({
            query: (id) => `/todos/${id}`,
        }),
        addEventListener: builder.mutation({
            query: (newTodo) => ({
                url: '/todos',
                method: 'POST',
                body: newTodo,
            }),
        }),
    })
});

export const { useGetTodosQuery, useGetTodoByIdQuery, useAddEventListenerMutation } = todosApi;