import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Task } from "../../models/task";

interface CardTarefaProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId?: string) => void;
}

export default function CardTarefa({ task, onEdit, onDelete }: CardTarefaProps) {
  const [visible, setVisible] = useState<boolean>(false); 

  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );

  const footer = (
    <div className="card flex justify-between px-3 py-2 gap-3">
      <Button
        label="Editar"
        icon="pi pi-pen-to-square"
        severity="info"
        size="small"
        outlined
        onClick={() => onEdit(task)}
      />
      <Button
        label="Apagar"
        icon="pi pi-trash"
        severity="danger"
        size="small"
        outlined
        onClick={() => setVisible(true)} // Abre o diálogo ao clicar em "Apagar"
      />
    </div>
  );

  const dialogFooter = (
    <div className="flex justify-end gap-2">
      <Button
        label="Não"
        icon="pi pi-times"
        onClick={() => setVisible(false)} // Fecha o diálogo sem apagar
        className="p-button-text"
      />
      <Button
        label="Sim"
        icon="pi pi-check"
        severity="danger"
        onClick={() => {
          onDelete(task.id);
          setVisible(false);
        }}
        autoFocus
      />
    </div>
  );

  return (
    <>
      <Card
        title={task.title}
        footer={footer}
        header={header}
        className="md:w-25rem"
      >
        <p className="m-0">{task.description}</p>
      </Card>

      <Dialog
        header="Confirmar Exclusão"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)} 
        footer={dialogFooter}
      >
        <p className="m-0">
          Tem certeza de que deseja apagar a tarefa{" "}
          <span className="font-bold">"{task.title}"</span>?
        </p>
      </Dialog>
    </>
  );
}
