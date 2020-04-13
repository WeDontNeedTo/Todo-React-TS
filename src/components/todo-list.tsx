import * as React from 'react'
import TodoItem from './todo-item'
import {TodoListInterface} from './../interfaces'


const TodoList=(props:TodoListInterface)=>{
    return(
        <div className="todo-list">
            <ul>
                {props.todos.map(i=>(
                    <li key={i.id}>
                        <TodoItem 
                            todo={i}
                            handleTodoUpdate={props.handleTodoUpdate}
                            handleTodoRemove={props.handleTodoRemove}
                            handleTodoComplete={props.handleTodoComplete}
                            handleTodoBlur={props.handleTodoBlur}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList