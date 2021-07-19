/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/crudList.js":
/*!************************************!*\
  !*** ./src/components/crudList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "updateTask": () => (/* binding */ updateTask),
/* harmony export */   "clearAllCompleted": () => (/* binding */ clearAllCompleted),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask)
/* harmony export */ });
/* harmony import */ var _statusUpdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusUpdate */ "./src/components/statusUpdate.js");
/* harmony import */ var _interaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction */ "./src/components/interaction.js");



const updateIndex = () => {
  let i = 0;
  _statusUpdate__WEBPACK_IMPORTED_MODULE_0__.data.forEach((element) => {
    element.index = i;
    i += 1;
  });
};

const createTask = (e) => {
  const lastItem = _statusUpdate__WEBPACK_IMPORTED_MODULE_0__.data[_statusUpdate__WEBPACK_IMPORTED_MODULE_0__.data.length - 1];
  const newTask = {
    description: e.target.value,
    completed: false,
    index: lastItem ? lastItem.index + 1 : 0,
  };
  (0,_statusUpdate__WEBPACK_IMPORTED_MODULE_0__.addData)(newTask);
};

const updateTask = (index, elm) => {
  const findObj = _statusUpdate__WEBPACK_IMPORTED_MODULE_0__.data.find((obj) => obj.index === index);
  findObj.description = elm.value;
  (0,_statusUpdate__WEBPACK_IMPORTED_MODULE_0__.saveData)();
};

const clearAllCompleted = () => {
  const completed = _statusUpdate__WEBPACK_IMPORTED_MODULE_0__.data.filter((obj) => !obj.completed);
  (0,_interaction__WEBPACK_IMPORTED_MODULE_1__.clearData)();
  (0,_statusUpdate__WEBPACK_IMPORTED_MODULE_0__.removeCompleted)(completed);
  updateIndex();
  (0,_statusUpdate__WEBPACK_IMPORTED_MODULE_0__.saveData)();
};

const deleteTask = (index) => {
  const removed = _statusUpdate__WEBPACK_IMPORTED_MODULE_0__.data.filter((obj) => obj.index !== index);
  (0,_interaction__WEBPACK_IMPORTED_MODULE_1__.clearData)();
  (0,_statusUpdate__WEBPACK_IMPORTED_MODULE_0__.removeCompleted)(removed);
  updateIndex();
  (0,_statusUpdate__WEBPACK_IMPORTED_MODULE_0__.saveData)();
};




/***/ }),

/***/ "./src/components/interaction.js":
/*!***************************************!*\
  !*** ./src/components/interaction.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dragStart": () => (/* binding */ dragStart),
/* harmony export */   "dragEnd": () => (/* binding */ dragEnd),
/* harmony export */   "dragOver": () => (/* binding */ dragOver),
/* harmony export */   "dragLeave": () => (/* binding */ dragLeave),
/* harmony export */   "drop": () => (/* binding */ drop),
/* harmony export */   "orderData": () => (/* binding */ orderData),
/* harmony export */   "clearData": () => (/* reexport safe */ _statusUpdate__WEBPACK_IMPORTED_MODULE_0__.clearData),
/* harmony export */   "updateData": () => (/* binding */ updateData),
/* harmony export */   "saveData": () => (/* reexport safe */ _statusUpdate__WEBPACK_IMPORTED_MODULE_0__.saveData)
/* harmony export */ });
/* harmony import */ var _statusUpdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusUpdate */ "./src/components/statusUpdate.js");


const dragStart = (elm) => {
  elm.classList.add('draggin');
};

const dragEnd = (elm) => {
  elm.classList.remove('draggin');
};

const dragOver = (elm, event) => {
  event.preventDefault();
  elm.classList.add('over-element');
};

const dragLeave = (elm) => {
  elm.classList.remove('over-element');
};
const orderData = () => {
  const draggableElements = document.querySelectorAll('.draggable');
  let i = 0;
  draggableElements.forEach((element) => {
    element.setAttribute('index', i);
    i += 1;
  });
};
const updateData = () => {
  const draggableElements = document.querySelectorAll('.draggable');
  draggableElements.forEach((element) => {
    const descriptionTxt = element.getElementsByClassName('txt-list')[0].value;
    const completedChk = element.getElementsByClassName('completed')[0].checked;
    const indexT = parseInt(element.getAttribute('index'), 10);
    const newTask = {
      description: descriptionTxt,
      completed: completedChk,
      index: indexT,
    };
    (0,_statusUpdate__WEBPACK_IMPORTED_MODULE_0__.addData)(newTask);
  });
};
const drop = (elm) => {
  elm.classList.remove('over-element');
  const elmDragged = document.querySelector('.draggin');
  elm.before(elmDragged);
  orderData();
  (0,_statusUpdate__WEBPACK_IMPORTED_MODULE_0__.clearData)();
  updateData();
  (0,_statusUpdate__WEBPACK_IMPORTED_MODULE_0__.saveData)();
};


/***/ }),

/***/ "./src/components/listElement.js":
/*!***************************************!*\
  !*** ./src/components/listElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interaction */ "./src/components/interaction.js");
/* harmony import */ var _statusUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statusUpdate */ "./src/components/statusUpdate.js");
/* harmony import */ var _crudList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crudList */ "./src/components/crudList.js");




const listElement = (task) => {
  const element = document.createElement('li');
  element.draggable = true;
  element.classList.add('draggable');
  element.setAttribute('index', task.index);
  element.addEventListener('dragstart', () => { (0,_interaction__WEBPACK_IMPORTED_MODULE_0__.dragStart)(element); });
  element.addEventListener('dragover', (event) => { (0,_interaction__WEBPACK_IMPORTED_MODULE_0__.dragOver)(element, event); });
  element.addEventListener('dragleave', () => { (0,_interaction__WEBPACK_IMPORTED_MODULE_0__.dragLeave)(element); });
  element.addEventListener('drop', () => { (0,_interaction__WEBPACK_IMPORTED_MODULE_0__.drop)(element); });
  element.addEventListener('dragend', () => { (0,_interaction__WEBPACK_IMPORTED_MODULE_0__.dragEnd)(element); });

  const divElmt = document.createElement('div');
  divElmt.classList.add('div-content');

  const txtInput = document.createElement('input');
  txtInput.setAttribute('index', task.index);
  txtInput.value = task.description;
  txtInput.classList.add('txt-list');
  txtInput.addEventListener('change', () => {
    (0,_crudList__WEBPACK_IMPORTED_MODULE_2__.updateTask)(parseInt(element.getAttribute('index'), 10), txtInput);
  });

  const check = document.createElement('input');
  check.classList.add('completed');
  check.type = 'checkbox';
  check.check = task.completed;
  check.addEventListener('change', () => {
    (0,_statusUpdate__WEBPACK_IMPORTED_MODULE_1__.updateStatus)(parseInt(element.getAttribute('index'), 10), check);
  });

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-ellipsis-v');

  const deleteicon = document.createElement('i');
  deleteicon.classList.add('far', 'fa-trash-alt');
  deleteicon.setAttribute('index', task.index);
  deleteicon.addEventListener('click', () => {
    (0,_crudList__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(parseInt(element.getAttribute('index'), 10), deleteicon);
    element.remove();
  });

  divElmt.appendChild(check);
  divElmt.appendChild(txtInput);
  element.appendChild(divElmt);
  element.appendChild(deleteicon);
  element.appendChild(icon);

  element.classList.add('list-element');
  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listElement);


/***/ }),

/***/ "./src/components/statusUpdate.js":
/*!****************************************!*\
  !*** ./src/components/statusUpdate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "clearData": () => (/* binding */ clearData),
/* harmony export */   "addData": () => (/* binding */ addData),
/* harmony export */   "saveData": () => (/* binding */ saveData),
/* harmony export */   "updateStatus": () => (/* binding */ updateStatus),
/* harmony export */   "loadData": () => (/* binding */ loadData),
/* harmony export */   "removeCompleted": () => (/* binding */ removeCompleted),
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* eslint-disable import/no-mutable-exports */
let data = [];

const saveData = () => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem('data', jsonData);
};

const updateStatus = (index, elm) => {
  const findObj = data.find((obj) => obj.index === index);
  findObj.completed = elm.checked;
  saveData();
};

const clearData = () => {
  data = [];
};

const removeCompleted = (newData) => {
  data = [...newData];
};

const addData = (obj) => {
  data.push(obj);
  saveData();
};

const loadData = () => {
  const localData = localStorage.getItem('data');
  data = localData == null ? data : JSON.parse(localData);
};

const getData = () => data;

/* eslint-enable import/no-mutable-exports */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/components/createList.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "drawListElements": () => (/* binding */ drawListElements)
/* harmony export */ });
/* harmony import */ var _crudList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crudList */ "./src/components/crudList.js");
/* harmony import */ var _statusUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statusUpdate */ "./src/components/statusUpdate.js");
/* harmony import */ var _listElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listElement */ "./src/components/listElement.js");




const clearDOMList = () => {
  const todoListElement = document.querySelectorAll('.list-element');
  todoListElement.forEach((elm) => { elm.remove(); });
};

const drawListElements = () => {
  const todoList = document.getElementById('todo-list');
  _statusUpdate__WEBPACK_IMPORTED_MODULE_1__.data.forEach((task) => {
    const element = (0,_listElement__WEBPACK_IMPORTED_MODULE_2__.default)(task);
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
      (0,_crudList__WEBPACK_IMPORTED_MODULE_0__.createTask)(e);
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
    (0,_crudList__WEBPACK_IMPORTED_MODULE_0__.clearAllCompleted)();
    clearDOMList();
    drawListElements();
  });
  cAllElement.appendChild(btn);

  todoList.appendChild(firstElement);
  todoList.appendChild(searchElement);
  todoList.appendChild(cAllElement);
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcnVkTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9pbnRlcmFjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9saXN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zdGF0dXNVcGRhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlTGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXdCO0FBQ2tCOztBQUUxQztBQUNBO0FBQ0EsRUFBRSx1REFBWTtBQUNkO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxtQkFBbUIsK0NBQUksQ0FBQyxzREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBTztBQUNUOztBQUVBO0FBQ0Esa0JBQWtCLG9EQUFTO0FBQzNCO0FBQ0EsRUFBRSx1REFBUTtBQUNWOztBQUVBO0FBQ0Esb0JBQW9CLHNEQUFXO0FBQy9CLEVBQUUsdURBQVM7QUFDWCxFQUFFLDhEQUFlO0FBQ2pCO0FBQ0EsRUFBRSx1REFBUTtBQUNWOztBQUVBO0FBQ0Esa0JBQWtCLHNEQUFXO0FBQzdCLEVBQUUsdURBQVM7QUFDWCxFQUFFLDhEQUFlO0FBQ2pCO0FBQ0EsRUFBRSx1REFBUTtBQUNWOztBQUlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzREOztBQUU5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFPO0FBQ1gsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0RBQVM7QUFDWDtBQUNBLEVBQUUsdURBQVE7QUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUN1QjtBQUN1QjtBQUNNOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLENBQUMsdURBQVMsVUFBVSxFQUFFO0FBQ3JFLG1EQUFtRCxDQUFDLHNEQUFRLGlCQUFpQixFQUFFO0FBQy9FLCtDQUErQyxDQUFDLHVEQUFTLFVBQVUsRUFBRTtBQUNyRSwwQ0FBMEMsQ0FBQyxrREFBSSxVQUFVLEVBQUU7QUFDM0QsNkNBQTZDLENBQUMscURBQU8sVUFBVSxFQUFFOztBQUVqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2QsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBWTtBQUNoQixHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFVO0FBQ2Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFHRTtBQUNGLDZDOzs7Ozs7VUNwQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMkQ7QUFDckI7QUFDRTs7QUFFeEM7QUFDQTtBQUNBLG9DQUFvQyxjQUFjLEVBQUU7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBLEVBQUUsdURBQVk7QUFDZCxvQkFBb0IscURBQVc7QUFDL0I7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFpQjtBQUNyQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InByaW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGRhdGEsIGFkZERhdGEsIHNhdmVEYXRhLCByZW1vdmVDb21wbGV0ZWQsXG59IGZyb20gJy4vc3RhdHVzVXBkYXRlJztcbmltcG9ydCB7IGNsZWFyRGF0YSB9IGZyb20gJy4vaW50ZXJhY3Rpb24nO1xuXG5jb25zdCB1cGRhdGVJbmRleCA9ICgpID0+IHtcbiAgbGV0IGkgPSAwO1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmluZGV4ID0gaTtcbiAgICBpICs9IDE7XG4gIH0pO1xufTtcblxuY29uc3QgY3JlYXRlVGFzayA9IChlKSA9PiB7XG4gIGNvbnN0IGxhc3RJdGVtID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xuICBjb25zdCBuZXdUYXNrID0ge1xuICAgIGRlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiBsYXN0SXRlbSA/IGxhc3RJdGVtLmluZGV4ICsgMSA6IDAsXG4gIH07XG4gIGFkZERhdGEobmV3VGFzayk7XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrID0gKGluZGV4LCBlbG0pID0+IHtcbiAgY29uc3QgZmluZE9iaiA9IGRhdGEuZmluZCgob2JqKSA9PiBvYmouaW5kZXggPT09IGluZGV4KTtcbiAgZmluZE9iai5kZXNjcmlwdGlvbiA9IGVsbS52YWx1ZTtcbiAgc2F2ZURhdGEoKTtcbn07XG5cbmNvbnN0IGNsZWFyQWxsQ29tcGxldGVkID0gKCkgPT4ge1xuICBjb25zdCBjb21wbGV0ZWQgPSBkYXRhLmZpbHRlcigob2JqKSA9PiAhb2JqLmNvbXBsZXRlZCk7XG4gIGNsZWFyRGF0YSgpO1xuICByZW1vdmVDb21wbGV0ZWQoY29tcGxldGVkKTtcbiAgdXBkYXRlSW5kZXgoKTtcbiAgc2F2ZURhdGEoKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcbiAgY29uc3QgcmVtb3ZlZCA9IGRhdGEuZmlsdGVyKChvYmopID0+IG9iai5pbmRleCAhPT0gaW5kZXgpO1xuICBjbGVhckRhdGEoKTtcbiAgcmVtb3ZlQ29tcGxldGVkKHJlbW92ZWQpO1xuICB1cGRhdGVJbmRleCgpO1xuICBzYXZlRGF0YSgpO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlVGFzaywgdXBkYXRlVGFzaywgY2xlYXJBbGxDb21wbGV0ZWQsIGRlbGV0ZVRhc2ssXG59O1xuIiwiaW1wb3J0IHsgY2xlYXJEYXRhLCBhZGREYXRhLCBzYXZlRGF0YSB9IGZyb20gJy4vc3RhdHVzVXBkYXRlJztcblxuY29uc3QgZHJhZ1N0YXJ0ID0gKGVsbSkgPT4ge1xuICBlbG0uY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbicpO1xufTtcblxuY29uc3QgZHJhZ0VuZCA9IChlbG0pID0+IHtcbiAgZWxtLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW4nKTtcbn07XG5cbmNvbnN0IGRyYWdPdmVyID0gKGVsbSwgZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZWxtLmNsYXNzTGlzdC5hZGQoJ292ZXItZWxlbWVudCcpO1xufTtcblxuY29uc3QgZHJhZ0xlYXZlID0gKGVsbSkgPT4ge1xuICBlbG0uY2xhc3NMaXN0LnJlbW92ZSgnb3Zlci1lbGVtZW50Jyk7XG59O1xuY29uc3Qgb3JkZXJEYXRhID0gKCkgPT4ge1xuICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUnKTtcbiAgbGV0IGkgPSAwO1xuICBkcmFnZ2FibGVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgaSk7XG4gICAgaSArPSAxO1xuICB9KTtcbn07XG5jb25zdCB1cGRhdGVEYXRhID0gKCkgPT4ge1xuICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUnKTtcbiAgZHJhZ2dhYmxlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVHh0ID0gZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0eHQtbGlzdCcpWzBdLnZhbHVlO1xuICAgIGNvbnN0IGNvbXBsZXRlZENoayA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29tcGxldGVkJylbMF0uY2hlY2tlZDtcbiAgICBjb25zdCBpbmRleFQgPSBwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaW5kZXgnKSwgMTApO1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25UeHQsXG4gICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZENoayxcbiAgICAgIGluZGV4OiBpbmRleFQsXG4gICAgfTtcbiAgICBhZGREYXRhKG5ld1Rhc2spO1xuICB9KTtcbn07XG5jb25zdCBkcm9wID0gKGVsbSkgPT4ge1xuICBlbG0uY2xhc3NMaXN0LnJlbW92ZSgnb3Zlci1lbGVtZW50Jyk7XG4gIGNvbnN0IGVsbURyYWdnZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbicpO1xuICBlbG0uYmVmb3JlKGVsbURyYWdnZWQpO1xuICBvcmRlckRhdGEoKTtcbiAgY2xlYXJEYXRhKCk7XG4gIHVwZGF0ZURhdGEoKTtcbiAgc2F2ZURhdGEoKTtcbn07XG5leHBvcnQge1xuICBkcmFnU3RhcnQsIGRyYWdFbmQsIGRyYWdPdmVyLCBkcmFnTGVhdmUsIGRyb3AsIG9yZGVyRGF0YSwgY2xlYXJEYXRhLCB1cGRhdGVEYXRhLCBzYXZlRGF0YSxcbn07IiwiaW1wb3J0IHtcbiAgZHJhZ1N0YXJ0LCBkcmFnRW5kLCBkcmFnT3ZlciwgZHJhZ0xlYXZlLCBkcm9wLFxufSBmcm9tICcuL2ludGVyYWN0aW9uJztcbmltcG9ydCB7IHVwZGF0ZVN0YXR1cyB9IGZyb20gJy4vc3RhdHVzVXBkYXRlJztcbmltcG9ydCB7IHVwZGF0ZVRhc2ssIGRlbGV0ZVRhc2sgfSBmcm9tICcuL2NydWRMaXN0JztcblxuY29uc3QgbGlzdEVsZW1lbnQgPSAodGFzaykgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgZWxlbWVudC5kcmFnZ2FibGUgPSB0cnVlO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdnYWJsZScpO1xuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaW5kZXgnLCB0YXNrLmluZGV4KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7IGRyYWdTdGFydChlbGVtZW50KTsgfSk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHsgZHJhZ092ZXIoZWxlbWVudCwgZXZlbnQpOyB9KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiB7IGRyYWdMZWF2ZShlbGVtZW50KTsgfSk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsICgpID0+IHsgZHJvcChlbGVtZW50KTsgfSk7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsICgpID0+IHsgZHJhZ0VuZChlbGVtZW50KTsgfSk7XG5cbiAgY29uc3QgZGl2RWxtdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZFbG10LmNsYXNzTGlzdC5hZGQoJ2Rpdi1jb250ZW50Jyk7XG5cbiAgY29uc3QgdHh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0eHRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgdGFzay5pbmRleCk7XG4gIHR4dElucHV0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgdHh0SW5wdXQuY2xhc3NMaXN0LmFkZCgndHh0LWxpc3QnKTtcbiAgdHh0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHVwZGF0ZVRhc2socGFyc2VJbnQoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2luZGV4JyksIDEwKSwgdHh0SW5wdXQpO1xuICB9KTtcblxuICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNoZWNrLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICBjaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2suY2hlY2sgPSB0YXNrLmNvbXBsZXRlZDtcbiAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIHVwZGF0ZVN0YXR1cyhwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaW5kZXgnKSwgMTApLCBjaGVjayk7XG4gIH0pO1xuXG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLWVsbGlwc2lzLXYnKTtcblxuICBjb25zdCBkZWxldGVpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBkZWxldGVpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcicsICdmYS10cmFzaC1hbHQnKTtcbiAgZGVsZXRlaWNvbi5zZXRBdHRyaWJ1dGUoJ2luZGV4JywgdGFzay5pbmRleCk7XG4gIGRlbGV0ZWljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGVsZXRlVGFzayhwYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnaW5kZXgnKSwgMTApLCBkZWxldGVpY29uKTtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9KTtcblxuICBkaXZFbG10LmFwcGVuZENoaWxkKGNoZWNrKTtcbiAgZGl2RWxtdC5hcHBlbmRDaGlsZCh0eHRJbnB1dCk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2RWxtdCk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVsZXRlaWNvbik7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsaXN0LWVsZW1lbnQnKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0RWxlbWVudDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHMgKi9cbmxldCBkYXRhID0gW107XG5cbmNvbnN0IHNhdmVEYXRhID0gKCkgPT4ge1xuICBjb25zdCBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIGpzb25EYXRhKTtcbn07XG5cbmNvbnN0IHVwZGF0ZVN0YXR1cyA9IChpbmRleCwgZWxtKSA9PiB7XG4gIGNvbnN0IGZpbmRPYmogPSBkYXRhLmZpbmQoKG9iaikgPT4gb2JqLmluZGV4ID09PSBpbmRleCk7XG4gIGZpbmRPYmouY29tcGxldGVkID0gZWxtLmNoZWNrZWQ7XG4gIHNhdmVEYXRhKCk7XG59O1xuXG5jb25zdCBjbGVhckRhdGEgPSAoKSA9PiB7XG4gIGRhdGEgPSBbXTtcbn07XG5cbmNvbnN0IHJlbW92ZUNvbXBsZXRlZCA9IChuZXdEYXRhKSA9PiB7XG4gIGRhdGEgPSBbLi4ubmV3RGF0YV07XG59O1xuXG5jb25zdCBhZGREYXRhID0gKG9iaikgPT4ge1xuICBkYXRhLnB1c2gob2JqKTtcbiAgc2F2ZURhdGEoKTtcbn07XG5cbmNvbnN0IGxvYWREYXRhID0gKCkgPT4ge1xuICBjb25zdCBsb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpO1xuICBkYXRhID0gbG9jYWxEYXRhID09IG51bGwgPyBkYXRhIDogSlNPTi5wYXJzZShsb2NhbERhdGEpO1xufTtcblxuY29uc3QgZ2V0RGF0YSA9ICgpID0+IGRhdGE7XG5leHBvcnQge1xuICBkYXRhLCBjbGVhckRhdGEsIGFkZERhdGEsIHNhdmVEYXRhLCB1cGRhdGVTdGF0dXMsIGxvYWREYXRhLCByZW1vdmVDb21wbGV0ZWQsIGdldERhdGEsXG59O1xuLyogZXNsaW50LWVuYWJsZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVUYXNrLCBjbGVhckFsbENvbXBsZXRlZCB9IGZyb20gJy4vY3J1ZExpc3QnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vc3RhdHVzVXBkYXRlJztcbmltcG9ydCBsaXN0RWxlbWVudCBmcm9tICcuL2xpc3RFbGVtZW50JztcblxuY29uc3QgY2xlYXJET01MaXN0ID0gKCkgPT4ge1xuICBjb25zdCB0b2RvTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1lbGVtZW50Jyk7XG4gIHRvZG9MaXN0RWxlbWVudC5mb3JFYWNoKChlbG0pID0+IHsgZWxtLnJlbW92ZSgpOyB9KTtcbn07XG5cbmNvbnN0IGRyYXdMaXN0RWxlbWVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdCcpO1xuICBkYXRhLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gbGlzdEVsZW1lbnQodGFzayk7XG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gIH0pO1xuICBjb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1idG4nKTtcbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoY2xlYXJCdG4pO1xufTtcbmNvbnN0IGNyZWF0ZUxpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdCcpO1xuXG4gIC8qKiAqKioqKioqKioqKioqKioqKioqKioqIEZpcnN0IGVsZW1lbnQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBjb25zdCBmaXJzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0ZXh0LmlubmVySFRNTCA9IFwidG9kYXkncyBUbyBkb3NcIjtcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS10ZXh0Jyk7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZmFzJywgJ2ZhLXN5bmMtYWx0Jyk7XG5cbiAgZmlyc3RFbGVtZW50LmFwcGVuZENoaWxkKHRleHQpO1xuICBmaXJzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgLyoqICoqKioqKioqKioqKioqKioqKioqKiogU2VhcmNoIGVsZW1lbnQgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuICBjb25zdCBzZWFyY2hFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgdHh0U2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgdHh0U2VhcmNoLnBsYWNlaG9sZGVyID0gJ0FkZCB0byB5b3VyIGxpc3QuLi4nO1xuICB0eHRTZWFyY2guY2xhc3NMaXN0LmFkZCgndHh0LWxpc3QnKTtcbiAgdHh0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgY3JlYXRlVGFzayhlKTtcbiAgICAgIGNsZWFyRE9NTGlzdCgpO1xuICAgICAgZHJhd0xpc3RFbGVtZW50cygpO1xuICAgIH1cbiAgfSk7XG4gIHNlYXJjaEVsZW1lbnQuYXBwZW5kQ2hpbGQodHh0U2VhcmNoKTtcblxuICAvKiogKioqKioqKioqKioqKioqKioqKioqKiBFbmQgbGlzdCBlbGVtZW50ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbiAgY29uc3QgY0FsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjQWxsRWxlbWVudC5pZCA9ICdjbGVhci1idG4nO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLmlubmVyVGV4dCA9ICdDbGVhciBhbGwgZWxlbWVudHMnO1xuICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLWNsZWFyJyk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckFsbENvbXBsZXRlZCgpO1xuICAgIGNsZWFyRE9NTGlzdCgpO1xuICAgIGRyYXdMaXN0RWxlbWVudHMoKTtcbiAgfSk7XG4gIGNBbGxFbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoZmlyc3RFbGVtZW50KTtcbiAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQoc2VhcmNoRWxlbWVudCk7XG4gIHRvZG9MaXN0LmFwcGVuZENoaWxkKGNBbGxFbGVtZW50KTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUxpc3QsIGRyYXdMaXN0RWxlbWVudHMgfTsiXSwic291cmNlUm9vdCI6IiJ9