import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={ todo.id }>
                    <span>{ todo.content }</span>
                    <button onClick={ () => { deleteTodo(todo.id) } }  className="right waves-effect waves-light btn-small red">Delete</button>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left, Yay.</p>
    );

    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}


export default Todos;