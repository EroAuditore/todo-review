import './css/style.css';
import { loadData } from './components/statusUpdate';
import { createList, drawListElements } from './components/createList';

const run = () => {
  loadData();
  createList();
  drawListElements();
};

run();