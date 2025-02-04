import { useState } from "react";
import Menu from "../../components/Menu";
import Painel from "../../components/Painel";
import Modal from "../../components/Modal";
import { Task } from "../../models/task";

function Home() {
  const [activePage, setActivePage] = useState("list"); 
  const [task, setTask] = useState<Task|null>(null); 
  const [modalOpen, setModalOpen] = useState(false);

    // Função para abrir o modal de nova tarefa
    const openModal = () => {
      setModalOpen(true);
    };
  
    // Função para fechar o modal de nova tarefa
    const closeModal = () => {
      setModalOpen(false);
    };

    const handleSetTask = (task: Task)=> {
      setTask(task);
      setModalOpen(true);
    }

  return (
    <>
      <Menu setActivePage={setActivePage} />
      {activePage === "new" && <Modal open={modalOpen} onClose={closeModal} task={task}/>}
      {task && <Modal open={modalOpen} onClose={closeModal} task={task}/>}
      {activePage === "list" && <Painel activePage={activePage} setTask={handleSetTask} />}
    </>
  );
}

export default Home;
