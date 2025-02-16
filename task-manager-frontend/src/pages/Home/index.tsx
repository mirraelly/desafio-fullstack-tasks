import { useState } from "react";
import Menu from "../../components/Menu";
import Painel from "../../components/Painel";
import Modal from "../../components/Modal";
import { Task } from "../../models/task";

function Home() {
  const [activePage, setActivePage] = useState("list");
  const [task, setTask] = useState<Task | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = (taskSalva?: Task) => {
    if (taskSalva !== null && task !== null) {
      Object.assign(task, taskSalva);
    }
    setTask(null);
    setModalOpen(false);
  };

  const handleSetTask = (task: Task) => {
    setTask(task);
    setModalOpen(true);
  };

  const todasTasks: Task[] = [
    {
      id: "2",
      title: "Tarefa1",
      description: "Teste",
      createdAt: "02/02/2025",
      status: "pending",
    },
    {
      id: "3",
      title: "Tarefa2",
      description: "Teste",
      createdAt: "03/02/2025",
      status: "completed",
    },
  ];
  

  const [tasksExibidas, setTasksExibidas] = useState<Task[]>(todasTasks);

  const handleDeleteTask = (taskId?: string) => {
    if (taskId) {
      setTasksExibidas((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }
  };

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    if (page === "new") {
      setModalOpen(true);
    } else if (page === "all") {
      setTasksExibidas(todasTasks);
    } else if (page === "pending") {
      setTasksExibidas(
        todasTasks.filter((task) => {
          return task.status === "pending";
        })
      );
    } else if (page === 'completed') {
      setTasksExibidas(
        todasTasks.filter((task) => {
          return task.status === "completed";
        })
      );
    }
    else {
      setTasksExibidas(todasTasks);
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
   
        <Painel
          activePage={activePage}
          setTask={handleSetTask}
          tasks={tasksExibidas}
          onDelete={handleDeleteTask}
        />
 
    </>
  );
}

export default Home;
