import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Textarea } from "primereact/textarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Task } from "./task";

interface TaskDialogProps {
  visible: boolean;
  onHide: () => void;
  onSave: (task: Task) => void;
  task?: Task; 
}

export default function TaskDialog({ visible, onHide, onSave, task }: TaskDialogProps) {
  const [taskData, setTaskData] = useState<Task>(
    task || { id: "", title: "", description: "", createdAt: "", status: "pending" }
  );

  const handleChange = (field: keyof Task, value: string) => {
    setTaskData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave({ ...taskData, id: task?.id || String(Date.now()), createdAt: task?.createdAt || new Date().toLocaleDateString() });
    onHide();
  };

  return (
    <Dialog header={task ? "Editar Tarefa" : "Nova Tarefa"} visible={visible} onHide={onHide} style={{ width: "30rem" }}>
      <div className="flex flex-col gap-3">
        <label>Título</label>
        <InputText value={taskData.title} onChange={(e) => handleChange("title", e.target.value)} />

        <label>Descrição</label>
        <Textarea value={taskData.description} onChange={(e) => handleChange("description", e.target.value)} />

        <label>Status</label>
        <Dropdown
          value={taskData.status}
          options={[
            { label: "Pendente", value: "pending" },
            { label: "Concluída", value: "completed" },
          ]}
          onChange={(e) => handleChange("status", e.value)}
        />
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={onHide} />
        <Button label="Salvar" icon="pi pi-check" onClick={handleSave} />
      </div>
    </Dialog>
  );
}
