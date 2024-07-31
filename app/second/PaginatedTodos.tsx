'use client';
import { useState } from 'react';
import ListItemCard from './ListItemCard';
import Button from './Button';
import PageButtons from './PageButton';
import PageSelector from './PageSelector';
import ButtonGroup from './ButtonGroup';
interface todoType {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

const PaginatedTodos: React.FC<{ todos: todoType[] }> = ({ todos }) => {
    const [pageSize, setPageSize] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTodos, setSelectedTodos] = useState<number[]>([]);

    const totalPages = Math.ceil(todos.length / pageSize);
    const handlePageSizeChange = (size: 4 | 8 | 12) => {
        setPageSize(size);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const paginatedTodos = todos.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleSelectTodo = (todoId: number) => {
        if (selectedTodos.includes(todoId)) {
            setSelectedTodos(selectedTodos.filter((id) => id !== todoId));
        } else {
            setSelectedTodos([...selectedTodos, todoId]);
        }
    };

    const handleDeselectAll = () => {
        setSelectedTodos([]);
    };
    return (
        <div>
            <div className="grid grid-cols-4 gap-6">
                {paginatedTodos.map((todo) => (
                    <ListItemCard key={todo.id} todo={todo} isSelected={selectedTodos.includes(todo.id)} onSelect={handleSelectTodo} />
                ))}
            </div>

            <PageButtons totalPages={Math.ceil(todos.length / pageSize)} currentPage={currentPage} onPageChange={handlePageChange} />
            <PageSelector totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />

            <div className="flex justify-end">
                <ButtonGroup width="240px" beforeText="Card per Pages:" endText={`totalPages : ${totalPages}`}>
                    <Button label="4" pageSize={4} activePageSize={pageSize} onClick={() => handlePageSizeChange(4)} />
                    <Button label="8" pageSize={8} activePageSize={pageSize} onClick={() => handlePageSizeChange(8)} />
                    <Button label="12" pageSize={12} activePageSize={pageSize} onClick={() => handlePageSizeChange(12)} />

                    <Button label="Deselect All" onClick={handleDeselectAll} />
                </ButtonGroup>
            </div>
        </div>
    );
};

export default PaginatedTodos;
