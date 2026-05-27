interface Props {
  task: string;
  setTask: (value: string) => void;
  onSubmit: () => void;
  editing: boolean;
}

export default function TodoForm({
  task,
  setTask,
  onSubmit,
  editing,
}: Props) {

  return (

    <div className="flex gap-3 mb-5">

      <input
        type="text"
        placeholder="Enter task"
        value={task}
       onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setTask(e.target.value)
}
        className="border p-3 rounded w-80"
      />

      <button
        onClick={onSubmit}
        className="bg-black text-white px-5 rounded"
      >
        {editing ? "Update" : "Add"}
      </button>

    </div>
  );
}