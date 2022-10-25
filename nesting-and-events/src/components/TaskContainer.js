import React from 'react';

function TaskContainer(props) {
  return (
      <div key="task" className="task-container">
        {props.children}
      </div>
  );
}
export default TaskContainer