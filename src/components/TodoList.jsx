import { Result } from 'antd';
import { useEffect } from 'react';

export default function TodoList( { tasklist, setTaskList }){
  //call the api and use setTaskList to fill in state...
  useEffect(() => {
    fetch('https://three-do-api-javv.web.app/tasks')
      .then(results => results.json())
      .then(tasks => setTaskList(tasks)) //.then(setTaskList)
      .catch(console.error)    
  }, [setTaskList]);
  if (!tasklist) {
    return <h2>No task to complete!</h2>
  }
  return (
    <ul>
      { tasklist.map(task => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  )
}