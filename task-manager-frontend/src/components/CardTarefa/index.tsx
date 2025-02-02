import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Task } from "../../models/task";

export default function CardTarefa({ task }: { task: Task }) {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = (
    <>
    <div className="flex flex-wrap justify-start gap-2">
      <Button label="Editar" icon="pi pi-check" severity="info" />
      <Button
        label="Apagar"
        severity="danger"
        icon="pi pi-trash text-white"
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
