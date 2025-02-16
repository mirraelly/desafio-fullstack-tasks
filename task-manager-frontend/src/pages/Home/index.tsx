import { useState } from "react";
import Menu from "../../components/Menu";
import Painel from "../../components/Painel";
import Modal from "../../components/Modal";
import { Task } from "../../models/task";

function Home() {
  const [activePage, setActivePage] = useState("list");
  const [task, setTask] = useState<Task | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Função para fechar o modal de nova tarefa
  const closeModal = () => {
    setTask(null);
    setModalOpen(false);
  };

  const handleSetTask = (task: Task) => {
    setTask(task);
    setModalOpen(true);
  };

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    if (page === "new") {
      setModalOpen(true);
    }
  };

  return (
    <>
      <Menu setActivePage={handleSetActivePage} />
      {activePage === "new" && (
        <Modal
          open={modalOpen}
          onClose={closeModal}
          task={{ title: "", description: "", status: "pending" }}
        />
      )}
      {task && <Modal open={modalOpen} onClose={closeModal} task={task} />}
      {activePage === "list" && (
        <Painel activePage={activePage} setTask={handleSetTask} />
      )}
    </>
  );
}

export default Home;
