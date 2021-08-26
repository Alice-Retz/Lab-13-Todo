import React, { Component } from 'react';
import { getTodos, updateTodo } from './fetch-utils.js';
// import classNames from 'classnames';

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
        const data = updateTodo(this.props.token, {
            description: this.state.newTodo,
            completed: false,
        });
        this.setState({ newTodo: '' });
        this.fetchToDoData();
    };

    handleCompleted = async (todo) => {
        todo.completed = !todo.completed;
        const data = updateTodo(this.props.token, todo);
        this.fetchToDoData();
    };


    render() { 
        return ( 
            <>
                <h1>Tasks</h1>
                <section className="todo-list">
                    {this.state.todos.map((todo) => (
                        <div className="task" key={todo.id}>
                        {/* <h2>{a.todo}</h2>
                        <p><input onClick={()=>this.handleClick(a.id)} type="checkbox" checked={a.completed} />
                        <label>{a.todo}</label></p> */}

                        <input type="checkbox" checked={todo.completed} onChange={() => this.handleCompleted(todo)}></input>
                        <label>{todo.todo}</label>
                        </div>
                    ))}
                </section>
                <section className="new-todo">
                    <form onSubmit={this.handleClick}>
                        <input value={this.state.newTodo} type="text" onChange={(e) => this.setState({ newTodo: e.target.value })} />
                        <button>Add New Task</button>
                    </form>
                </section>
            </>
         );
    }
}
 
export default ToDos;