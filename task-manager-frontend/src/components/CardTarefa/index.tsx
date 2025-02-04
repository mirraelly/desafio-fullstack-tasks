import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Task } from "../../models/task";
import { ButtonGroup } from "primereact/buttongroup";

export default function CardTarefa({ task }: { task: Task }) {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = (
    <>
      <div className="card flex justify-between px-1">
     
          <Button
            label="Editar"
            icon="pi pi-pen-to-square"
            severity="info"
            size="small"
            outlined
            // onClick={load}
          />
          <Button
            label="Apagar"
            severity="danger"
            icon="pi pi-trash"
            size="small"
            outlined
          />
      </div>
    </>
  );

  return (
    <Card
      title={task.title}
      footer={footer}
      header={header}
      className="md:w-25rem"
    >
      <p className="m-0">{task.description}</p>
    </Card>
  );
}
