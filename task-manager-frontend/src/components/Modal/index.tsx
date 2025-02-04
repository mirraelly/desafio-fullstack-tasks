import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Task } from "../../models/task";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  task: Task | null;
}

export default function Modal({ open, onClose, task }: ModalProps) {
  const footerContent = (
    <div>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={() => onClose()}
        className="p-button-text"
      />
      <Button
        label="Salvar"
        icon="pi pi-check"
        onClick={() => onClose()}
        autoFocus
      />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Header"
        visible={open}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!open) return;
          onClose();
        }}
        footer={footerContent}
      >
        <p className="m-0">
          <div className="flex flex-wrap align-items-center mb-3 gap-2">
            <label htmlFor="title" className="p-hidden-accessible"></label>
            <InputText
              id="title"
              placeholder="Título"
              className="p-invalid mr-2"
              value={task.title}
            />
            <Message severity="error" text="Username is required" />
          </div>
          <div className="flex flex-wrap align-items-center mb-3 gap-2">
            <label htmlFor="descricao" className="p-hidden-accessible"></label>
            <InputText
              id="descricacao"
              placeholder="Descrição"
              className="mr-2"
              value={task.description}
            />
          </div>
          <div className="flex flex-wrap align-items-center mb-3 gap-2">
            <label htmlFor="status" className="p-hidden-accessible"></label>
            <InputText
              id="status"
              placeholder="Situação"
              className="p-invalid mr-2"
              value={task.status}
            />
          </div>
        </p>
      </Dialog>
    </div>
  );
}
