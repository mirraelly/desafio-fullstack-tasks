import { Menubar } from "primereact/menubar";

interface MenuProps {
  setActivePage: (page: string) => void;
}

export default function Menu({ setActivePage }: MenuProps) {
  // <Menu setActivePage={setActivePage} /> 
  const items = [
    { label: "Lista de Tarefas", icon: "pi pi-list-check", command: () => setActivePage("list") },
    { label: "Nova Tarefa", icon: "pi pi-plus", command: () => setActivePage("new") },
    {
      label: "Status",
      icon: "pi pi-filter",
      items: [
        { label: "Todas", icon: "pi pi-table", command: () => setActivePage("all") },
        { label: "Pendentes", icon: "pi pi-hourglass", command: () => setActivePage("pending") },
        { label: "Concluídas", icon: "pi pi-check-square", command: () => setActivePage("completed") },
      ],
    },
  ];

  return (
    <div className="card">
      <Menubar model={items} className="custom-menubar" />
    </div>
  );
}
