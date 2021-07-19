import {
  data, addData, saveData, removeCompleted,
} from './statusUpdate';
import { clearData } from './interaction';

const updateIndex = () => {
  let i = 0;
  data.forEach((element) => {
    element.index = i;
    i += 1;
  });
};

const createTask = (e) => {
  const lastItem = data[data.length - 1];
  const newTask = {
    description: e.target.value,
    completed: false,
    index: lastItem ? lastItem.index + 1 : 0,
  };
  addData(newTask);
};

const updateTask = (index, elm) => {
  const findObj = data.find((obj) => obj.index === index);
  findObj.description = elm.value;
  saveData();
};

const clearAllCompleted = () => {
  const completed = data.filter((obj) => !obj.completed);
  clearData();
  removeCompleted(completed);
  updateIndex();
  saveData();
};

const deleteTask = (index) => {
  const removed = data.filter((obj) => obj.index !== index);
  clearData();
  removeCompleted(removed);
  updateIndex();
  saveData();
};

export {
  createTask, updateTask, clearAllCompleted, deleteTask,
};
