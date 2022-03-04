const tasks = [
    {_id: 0, text: "Welcome to Todo!!!"}
]


export function getTasks(){
    return tasks;
}


export function getTask(id) {
  return tasks.find(t => t._id === id);
}


export function saveTask(task){
    let taskInDb = tasks.find(t => t._id === task._id ) || {};
    taskInDb.text = task.text;
    if (!taskInDb._id) {
        taskInDb._id = Date.now().toString();
        tasks.push(taskInDb);
    }
  return taskInDb;
}

export function deleteTask(id){
    let taskInDb = tasks.find(t => t._id === id );
    tasks.splice(tasks.indexOf(taskInDb),1);
    return taskInDb;
}