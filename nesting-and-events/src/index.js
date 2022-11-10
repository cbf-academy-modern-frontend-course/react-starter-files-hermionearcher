import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import TaskContainer from './components/TaskContainer';
import Task from './components/Task';

const taskList = [
  { "id": "task1", "title": "Buy Milk", "isComplete": true },
  { "id": "task2", "title": "Read a book", "isComplete": false },
  { "id": "task3", "title": "Early morning run", "isComplete": false },
  { "id": "task4", "title": "Drink water", "isComplete": false },
  { "id": "task5", "title": "Visit the puppy shelter", "isComplete": true },
  { "id": "task6", "title": "Watch Bad Sisters", "isComplete": false }
];

const getSortedElements = (sortByBool) => {
  return taskList.filter((x) => x.isComplete === sortByBool);
};

function toggleComplete(id) {
  console.log(`Task with the id '${id}' was clicked`);
}

function App() {
  let taskList = getSortedElements(false).concat(getSortedElements(true));
  return (
    <Fragment>
      <h1 key="heading">Task List</h1>
      <TaskContainer>
        {/* Task: Nesting Components - Add you tasks here: */}
        {taskList.map((task, i) => {
          return (
            <Task key={i} id={task.id} title={task.title} isComplete={task.isComplete} toggleComplete={toggleComplete} />
          )
        })}
      </TaskContainer>
    </Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

