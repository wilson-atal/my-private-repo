import React from 'react';
import ListItemCard from './ListItemCard'; //PaginatedTodos wrap the ListItemCard
import { todoType } from './types';
import { getTodos } from '../utils/api/getTodos';
import PaginatedTodos from './PaginatedTodos';
export default async function HomePage() {
    const todos: todoType[] = await getTodos();

    return (
        <div>
            <h1 className="text-center">Todo List</h1>
            <PaginatedTodos todos={todos} />
        </div>
    );
}
