// import React, { Component } from 'react';
// import classNames from 'classnames';


// class ToDos extends Component {
//     state = { id: 0, todo: '', completed: false, user_id: 0, };

//     componentDidMount = async () => {
//         const todoId = this.props.match.params.id;
//         const todoData = await getTodos(todoId);
        
//         this.setState({
//             id: todoData.id,
//             todo: todoData.todo,
//             completed: todoData.completed,
//             user_id: todoData.user_id
//         });
//         console.log('state', this.state)
//     };

//     handleClick = async (e) => {
//         e.preventDefault();

//         const todoData = {
//             id: this.state.id,
//             todo: this.state.todo,
//             completed: this.state.completed,
//             user_id: this.state.user_id,
//         };

//         const data = await updateTodo(todoData);
//         if (data.error) {
//             this.setState({ message: data.error, error: true });
//         } else {
//             this.setState({ message: 'Task Updated.', error: false });
//             setTimeout(() => {
//                 this.setState({ message: '' });
//             }, 2000);
//         }
//     };

//     render() { 
//         return ( 
//             <>
//                 {this.state.message && (
//                     <div 
//                         className = {classNames({
//                             message: true, 
//                             error: this.state.error, 
//                             success: !this.state.error,
//                         })}
//                     > {this.state.message} </div>
//                 )}
//                 <h1>Your Tasks</h1>
//                 <div className="task-list">
//                 </div>
//             </>
//          );
//     }
// }
 
// export default ToDos;