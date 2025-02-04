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
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={task.id}>
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
      <div
        style={{ background: "#6d6d931c" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-1 p-2"
      >
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
