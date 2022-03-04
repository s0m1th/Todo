import React, { Component } from 'react';
import { deleteTask, getTasks, saveTask } from '../utils/tasks';

class List extends Component {
    state = { 
        tasks: []
     }

     text = React.createRef()

     componentDidMount(){
         this.setState({tasks: getTasks()})
     }

     handleDelete = id => {
         const tasks = this.state.tasks.filter(t => t._id !== id)
         this.setState({tasks})

         deleteTask(id)
     }

     handleAdd = e => {
         e.preventDefault();
         const text = this.text.current.value
         if(text.length > 0 && text !==" "){
             const task = {}
             task.text = text
             saveTask(task)
             this.setState({tasks: getTasks()})
             this.text.current.value = ""
         }
     }

    render() { 
        return (
            <div className='box'>
                    {this.state.tasks.map(task => (
                        <div className='item' key={task._id}>
                            <input type="checkbox" value={task._id} onChange ={() => this.handleDelete(task._id)} />
                            <p>{task.text}</p>
                        </div>
                    ))}
                <form className='item' onSubmit= {this.handleAdd}>
                    <input autoFocus ref={this.text} type="text" placeholder='New Task' autoComplete='off'></input>
                    <button  type="submit" >+</button>
                </form>
            </div>

        );
    }
}
 
export default List;
