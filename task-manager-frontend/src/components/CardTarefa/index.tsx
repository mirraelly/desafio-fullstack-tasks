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
      <Button label="Editar" icon="pi pi-check" severity="info" />
      <Button
        label="Apagar"
        severity="danger"
        icon="pi pi-times"
        style={{ marginLeft: "0.5em" }}
      />
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
