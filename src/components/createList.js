import { createTask, clearAllCompleted } from './crudList';
import { data } from './statusUpdate';
import listElement from './listElement';

const clearDOMList = () => {
  const todoListElement = document.querySelectorAll('.list-element');
  todoListElement.forEach((elm) => { elm.remove(); });
};

const drawListElements = () => {
  const todoList = document.getElementById('todo-list');
  data.forEach((task) => {
    const element = listElement(task);
    todoList.appendChild(element);
  });
  const clearBtn = document.getElementById('clear-btn');
  todoList.appendChild(clearBtn);
};
const createList = () => {
  const todoList = document.getElementById('todo-list');

  /** ********************** First element **************************************** */
  const firstElement = document.createElement('li');
  const text = document.createElement('p');
  text.innerHTML = "today's To dos";
  text.classList.add('title-text');
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-sync-alt');

  firstElement.appendChild(text);
  firstElement.appendChild(icon);

  /** ********************** Search element **************************************** */
  const searchElement = document.createElement('li');
  const txtSearch = document.createElement('input');
  txtSearch.placeholder = 'Add to your list...';
  txtSearch.classList.add('txt-list');
  txtSearch.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      createTask(e);
      clearDOMList();
      drawListElements();
    }
  });
  searchElement.appendChild(txtSearch);

  /** ********************** End list element **************************************** */
  const cAllElement = document.createElement('li');
  cAllElement.id = 'clear-btn';
  const btn = document.createElement('button');
  btn.innerText = 'Clear all elements';
  btn.classList.add('btn-clear');
  btn.addEventListener('click', () => {
    clearAllCompleted();
    clearDOMList();
    drawListElements();
  });
  cAllElement.appendChild(btn);

  todoList.appendChild(firstElement);
  todoList.appendChild(searchElement);
  todoList.appendChild(cAllElement);
};

export { createList, drawListElements };