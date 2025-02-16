import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";
import { Task } from "../../models/task";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: (task?: Task) => void;
  task: Task | null;
}

export default function Modal({ open, onClose, task }: ModalProps) {
  const {
    register,
    control,
    getValues,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Task>();

  const listaStatus = ["pending", "completed"];

  const countryOptionTemplate = (option: string) => {
    return (
      <div className="flex align-items-center">
        <div>{traduzirStatus(option)}</div>
      </div>
    );
  };

  function traduzirStatus(status: string) {
    if (status === "pending") {
      return "Pendente";
    } else {
      return "Concluído";
    }
  }

  useEffect(() => {
    if (task) {
      reset({ ...task });
    }
  }, [task, reset]);

  const onSubmit = (data: Task) => {
    console.log("Dados do formulário enviados:", data);
  };

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
        onClick={() => onClose(getValues())}
        autoFocus
        type="submit"
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap align-items-center mb-3 gap-2">
              <label htmlFor="title" className="p-hidden-accessible"></label>
              <InputText
                id="title"
                {...register("title", { required: "Título é obrigatório" })}
                placeholder="Título"
                className="p-invalid mr-2 w-full"
              />
              {errors.status && (
                <Message severity="error" text={errors.status.message} />
              )}
            </div>
            <div className="flex flex-wrap align-items-center mb-3 gap-2">
              <label
                htmlFor="descricao"
                className="p-hidden-accessible"
              ></label>
              <InputText
                id="descricacao"
                placeholder="Descrição"
                {...register("description", {
                  required: "Descrição é obrigatória",
                })}
                className="mr-2 w-full"
              />
            </div>
            <div className="flex flex-wrap align-items-center mb-3 gap-2">
              <label htmlFor="status" className="p-hidden-accessible"></label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    id={field.name}
                    value={field.value}
                    onChange={(e) => field.onChange(e.value)}
                    options={listaStatus}
                    placeholder="Selecionar status"
                    className="p-invalid w-full"
                    itemTemplate={countryOptionTemplate}
                    valueTemplate={countryOptionTemplate}
                  />
                )}
              />
              {errors.status && (
                <Message severity="error" text={errors.status.message} />
              )}
            </div>
          </form>
        </p>
      </Dialog>
    </div>
  );
}
