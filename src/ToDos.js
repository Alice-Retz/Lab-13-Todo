import React, { Component } from 'react';
import { getTodos, updateTodo, createTodo } from './fetch-utils.js';
class ToDos extends Component {
    state = { todos: [], newTodo: '', };

    componentDidMount = async () => {
        this.fetchToDoData();
    };

    fetchToDoData = async () => {
        const data = await getTodos(this.props.token);
        this.setState({ todos: data });
    };
    

    handleClick = async (e) => {
        e.preventDefault();
        createTodo(this.props.token, {
            todo: this.state.newTodo,
            completed: false,
        });
        this.setState({ newTodo: '' });
        this.fetchToDoData();
    };

    handleCompleted = async (todo) => {
        todo.completed = !todo.completed;
        updateTodo(this.props.token, todo);
        this.fetchToDoData();
    };


    render() { 
        return ( 
            <>
                <h1>Your Tasks__</h1>
                <section className="todo-list">
                    {this.state.todos.map((todo) => (
                        <div className="task" key={todo.id}>

                        <input type="checkbox" checked={todo.completed} onChange={() => this.handleCompleted(todo)}></input>
                        <label>{todo.todo}</label>
                        </div>
                    ))}
                </section>
                <p></p>
                <section className="new-todo">
                    <form onSubmit={this.handleClick}>
                        <input value={this.state.newTodo} type="text" onChange={(e) => this.setState({ newTodo: e.target.value })} />
                        <button>Add New Task</button>
                    </form>
                    <button onClick={() => {
                    localStorage.removeItem('TOKEN');
                    window.location.replace('/');
                    }}>Log Out</button>
                </section>
            </>
         );
    }
}
 
export default ToDos;