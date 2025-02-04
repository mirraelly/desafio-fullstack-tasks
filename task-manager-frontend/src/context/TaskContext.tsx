import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "pendente" | "concluída";
  createdAt: string;
}

interface TaskContextType {
  tasks: Task[];
  fetchTasks: () => void;
  addTask: (title: string, description?: string) => void;
  updateTask: (id: string, title: string, description?: string, status?: string) => void;
  deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const response = await api.get("/");
    setTasks(response.data);
  };

  const addTask = async (title: string, description?: string) => {
    await api.post("/", { title, description, status: "pendente" });
    fetchTasks();
  };

  const updateTask = async (id: string, title: string, description?: string, status?: string) => {
    await api.put(`/${id}`, { title, description, status });
    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await api.delete(`/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask deve ser usado dentro de um TaskProvider");
  }
  return context;
};
