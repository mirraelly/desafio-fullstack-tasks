import { useState } from "react";
import { DataView } from "primereact/dataview";
import { Task } from "../../models/task";
import CardTarefa from "../CardTarefa";

interface PainelProps {
  activePage: string;
  setTask: (t: Task) => void;
}

export default function Painel({ activePage, setTask }: PainelProps) {
  const [tasks] = useState<Task[]>([
    {
      id: "2",
      title: "Tarefa1",
      description: "Teste",
      createdAt: "02/02/2025",
      status: "pending",
    },
    {
      id: "3",
      title: "Tarefa2",
      description: "Teste",
      createdAt: "03/02/2025",
      status: "completed",
    },
  ]);

  const filteredTasks = tasks.filter((task) => {
    if (activePage === "all") return true;
    if (activePage === "pending") return task.status === "pending";
    if (activePage === "completed") return task.status === "completed";
    return true;
  });

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
      {/* Renderização condicional baseado no valor de activePage */}
      {activePage === "list" && (
        <DataView
          value={filteredTasks}
          itemTemplate={itemTemplate}
          listTemplate={listTemplate}
          layout={"grid"}
        />
      )}
      {activePage === "new" && (
        <div>
          {/* Aqui você pode adicionar o formulário para nova tarefa */}
          <h2>Nova Tarefa</h2>
        </div>
      )}
      {activePage === "all" && (
        <div>
          {/* Aqui você pode adicionar o conteúdo para "Todas as tarefas" */}
          <h2>Todas as Tarefas</h2>
        </div>
      )}
      {activePage === "pending" && (
        <div>
          {/* Aqui você pode adicionar o conteúdo para "Tarefas Pendentes" */}
          <h2>Tarefas Pendentes</h2>
        </div>
      )}
      {activePage === "completed" && (
        <div>
          {/* Aqui você pode adicionar o conteúdo para "Tarefas Concluídas" */}
          <h2>Tarefas Concluídas</h2>
        </div>
      )}
    </div>
  );
}
