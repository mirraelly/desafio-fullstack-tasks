import { DataView } from "primereact/dataview";
import { Task } from "../../models/task";
import CardTarefa from "../CardTarefa";

interface PainelProps {
  activePage: string;
  tasks: Task[];
  setTask: (t: Task) => void;
}

export default function Painel({ activePage, tasks, setTask }: PainelProps) {
console.log(tasks)
  const gridItem = (task: Task) => (
    <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={task.id}>
      <CardTarefa
        task={task}
        onEdit={() => setTask(task)}
        onDelete={handleDeleteTask}
      />
    </div>
  );

  const itemTemplate = (task: Task) => {
    return gridItem(task);
  };

  const listTemplate = (tasks: Task[]) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 p-2">
        {tasks.map((task) => itemTemplate(task))}
      </div>
    );
  };

  const handleDeleteTask = (taskId?: string) => {
    console.log("Deletando tarefa com ID", taskId);
    // Lógica para excluir a tarefa
  };

  return (
    <div>
      {/* Renderização das tarefas */}

      {activePage === "new" && (
        <div>
          <h2 className="text-blue-900 text-[1.3rem] ms-4 mt-2 font-bold underline underline-offset-2 decoration-2 text-center">Nova Tarefa</h2>
        </div>
      )}
      {activePage === "all" && (
        <div>
          <h2 className="text-blue-900 text-[1.3rem] ms-4 mt-2 font-bold underline underline-offset-2 decoration-2 text-center">Todas as Tarefas</h2>
        </div>
      )}
      {activePage === "pending" && (
        <div>
          <h2 className="text-blue-900 text-[1.3rem] ms-4 mt-2 font-bold underline underline-offset-2 decoration-2 text-center">Tarefas Pendentes</h2>
        </div>
      )}
      {activePage === "completed" && (
        <div>
          <h2 className="text-blue-900 text-[1.3rem] ms-4 mt-2 font-bold underline underline-offset-2 decoration-2 text-center">Tarefas Concluídas</h2>
        </div>
      )}
        <DataView
          value={tasks}
          itemTemplate={itemTemplate}
          listTemplate={listTemplate}
          layout={"grid"}
        />
    </div>
  );
}
