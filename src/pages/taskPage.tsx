import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SidePanel } from "../components/sidePanel";
import {
  deleteTaskApi,
  getAllTasks,
  postNewTask,
  TaskType,
} from "../services/taskService";

export const TaskPage = () => {
  let { listId } = useParams();
  console.log(listId);

  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [newTaskName, setNewTaskName] = useState("");

  useEffect(() => {
    if (listId === undefined) return;
    getAllTasks(listId).then((result) => setTasks(result));
  }, [listId]);

  const createNewTask = () => {
    if (listId)
      postNewTask(listId, newTaskName).then(() => {
        if (listId) getAllTasks(listId).then((result) => setTasks(result));
      });
  };

  const deleteTask = (taskId: string) => {
    deleteTaskApi(taskId).then(() => {
      if (listId) getAllTasks(listId).then((result) => setTasks(result));
    });
  };

  const completedTasks = tasks.filter((task) => !task.isCompleted);
  const incompletedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <body>
      <div className="container">
        <SidePanel />
        <main className="main-content">
          <div className="header">
            <button className="logout-btn">Logout</button>
          </div>

          <section className="incomplete-tasks">
            <h2>Incomplete Tasks</h2>
            {incompletedTasks.map((task) => (
              <li key={task.id}>
                <span className="task-name">{task.name}</span>
                <span className="task-icons">
                  <button className="complete-btn">&#x2713;</button>
                  <button className="delete-btn">&#x1F5D1;</button>
                </span>
              </li>
            ))}

            <div className="add-task">
              <input
                type="text"
                placeholder="New task"
                name="newTaskName"
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
              />
              <button onClick={createNewTask}>Add Task</button>
            </div>
          </section>

          <section className="completed-tasks">
            <h2>Completed Tasks</h2>
            <ul>
              {completedTasks.map((task) => (
                <li key={task.id}>
                  <span className="task-name">{task.name}</span>
                  <span className="task-icons">
                    <button className="complete-btn">&#x2713;</button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(task.id)}
                    >
                      &#x1F5D1;
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </body>
  );
};
