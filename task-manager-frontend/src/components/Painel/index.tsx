import { useState, useEffect } from "react";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Task } from "../../models/task";
import CardTarefa from "../CardTarefa";

export default function Painel() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "2",
      title: "Tarefa1",
      description: "Teste",
      createdAt: "02/02/2025",
      status: "pending",
    },
    {
      id: "3",
      title: "Tarefa1",
      description: "Teste",
      createdAt: "02/02/2025",
      status: "pending",
    },
  ]);

  const gridItem = (task: Task) => {
    return (
      <div className="col-4 sm:col-4 lg:col-4 xl:col-4" key={task.id}>
        <CardTarefa task={task} />
      </div>
    );
  };

  const itemTemplate = (task: Task) => {
    if (!task) {
      return;
    }

    return gridItem(task);
  };

  const listTemplate = (tasks: Task[]) => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {tasks.map((task) => itemTemplate(task))}
      </div>
    );
  };

  return (
    <DataView
      value={tasks}
      itemTemplate={itemTemplate}
      listTemplate={listTemplate}
      layout={"grid"}
    />
  );
}
