import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onEdit: () => void;
  onDelete: () => void;
}

export default function TodoItem({
  todo,
  onEdit,
  onDelete,
}: Props) {

  return (

    <div className="border p-3 mb-3 flex justify-between rounded">

      <p>{todo.task}</p>

      <div className="flex gap-2">

        <button
          onClick={onEdit}
          className="bg-blue-500 text-white px-3 rounded"
        >
          Edit
        </button>

        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-3 rounded"
        >
          Delete
        </button>

      </div>

    </div>
  );
}