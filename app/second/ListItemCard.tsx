import { todoType } from './types';
interface ListItemCardProps {
    todo: todoType;
    isSelected: boolean;
    onSelect: (todoId: number) => void;
}

const ListItemCard: React.FC<ListItemCardProps> = ({ todo, isSelected, onSelect }) => {
    return (
        <div
            className={`p-4 rounded-md shadow-md cursor-pointer hover:bg-gray-100 ${isSelected ? 'bg-blue-500' : 'bg-white'}`}
            onClick={() => onSelect(todo.id)}
        >
            <h3 className="text-lg font-bold">{todo.title}</h3>
            <p>User ID: {todo.userId}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default ListItemCard;

