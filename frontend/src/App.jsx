import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const BASE_URL = "http://localhost:5002";

  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ id: null, value: "" });

  const getTodo = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/todos`);
      setTodos(res?.data?.data || []);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const addTodo = async (event) => {
    event.preventDefault();
    const todoValue = event.target.todoInput.value.trim();

    if (!todoValue) {
      alert("Please enter a valid task.");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/v1/todo`, { todo: todoValue });
      event.target.reset();
      getTodo();
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/v1/todo/${id}`);
      getTodo();
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const startEditing = (id, value) => {
    setIsEditing(true);
    setCurrentTodo({ id, value });
  };

  const saveEdit = async (event) => {
    event.preventDefault();
    const newValue = event.target.editInput.value.trim();

    if (!newValue) {
      alert("Please enter a valid task.");
      return;
    }

    try {
      await axios.put(`${BASE_URL}/api/v1/todo/${currentTodo.id}`, { todo: newValue });
      setIsEditing(false);
      setCurrentTodo({ id: null, value: "" });
      getTodo();
    } catch (err) {
      console.error("Error editing todo:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br    flex items-center justify-center">
      <div className="bg-white p-8 rounded-[8px] shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400  mb-8">
          Todo App
        </h1>

        {isEditing ? (
          <form onSubmit={saveEdit} className="mb-6">
            <input
              type="text"
              name="editInput"
              defaultValue={currentTodo.value}
              className="w-full p-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-xl shadow-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 mt-4 transition-all"
            >
              Save
            </button>
          </form>
        ) : (
          <form onSubmit={addTodo} className="mb-6">
            <input
              type="text"
              name="todoInput"
              placeholder="Enter your task"
              className="w-full p-4 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-xl shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-300 mt-4 transition-all"
            >
              Add Task
            </button>
          </form>
        )}

        <ul className="mt-6 space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <span className="text-gray-800 font-medium">{todo.todoContent}</span>
              <div className="flex space-x-3">
                <button
                  onClick={() => startEditing(todo.id, todo.todoContent)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 transition-all"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

















// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function App() {
//   const BASE_URL = "http://localhost:5002";

//   const [todos, setTodos] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTodo, setCurrentTodo] = useState({ id: null, value: "" });

//   const getTodo = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/v1/todos`);
//       setTodos(res?.data?.data || []);
//     } catch (err) {
//       console.error("Error fetching todos:", err);
//     }
//   };

//   useEffect(() => {
//     getTodo();
//   }, []);

//   const addTodo = async (event) => {
//     event.preventDefault();
//     const todoValue = event.target.todoInput.value.trim();

//     if (!todoValue) {
//       alert("Please enter a valid task.");
//       return;
//     }

//     try {
//       await axios.post(`${BASE_URL}/api/v1/todo`, { todo: todoValue });
//       event.target.reset();
//       getTodo();
//     } catch (err) {
//       console.error("Error adding todo:", err);
//     }
//   };

//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/api/v1/todo/${id}`);
//       getTodo();
//     } catch (err) {
//       console.error("Error deleting todo:", err);
//     }
//   };

//   const startEditing = (id, value) => {
//     setIsEditing(true);
//     setCurrentTodo({ id, value });
//   };

//   const saveEdit = async (event) => {
//     event.preventDefault();
//     const newValue = event.target.editInput.value.trim();

//     if (!newValue) {
//       alert("Please enter a valid task.");
//       return;
//     }

//     try {
//       await axios.put(`${BASE_URL}/api/v1/todo/${currentTodo.id}`, { todo: newValue });
//       setIsEditing(false);
//       setCurrentTodo({ id: null, value: "" });
//       getTodo();
//     } catch (err) {
//       console.error("Error editing todo:", err);
//     }
//   };



 





//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-semibold text-indigo-600 text-center mb-6">Todo App</h1>

//         {isEditing ? (
//           <form onSubmit={saveEdit} className="mb-6">
//             <input
//               type="text"
//               name="editInput"
//               defaultValue={currentTodo.value}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 mt-4"
//             >
//               Save
//             </button>
//           </form>
//         ) : (
//           <form onSubmit={addTodo} className="mb-6">
//             <input
//               type="text"
//               name="todoInput"
//               placeholder="Enter your task"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 mt-4"
//             >
//               Add Task
//             </button>
//           </form>
//         )}

//         <ul className="mt-6 space-y-4">
//           {todos.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100"
//             >
//               <span className="text-gray-700">{todo.todoContent}</span>
//               <div className="space-x-3">
//                 <button
//                   onClick={() => startEditing(todo.id, todo.todoContent)}
//                   className="text-indigo-600 hover:text-indigo-700"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteTodo(todo.id)}
//                   className="text-red-600 hover:text-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }






// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export default function App() {
//   const BASE_URL = 'http://localhost:5002';


//   const [todos, setTodos] = useState([]);


//   const getTodo = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/api/v1/todos`);
//       const todosFromServer = res?.data?.data;
//       console.log('todosFromServer ', todosFromServer);
//       setTodos(todosFromServer || []);
//     } catch (err) {
//       console.error('Error fetching todos:', err);
//     }
//   };


//   useEffect(() => {
//     getTodo();
//   }, []);

//   const addTodo = async (event) => {


//     // event.preventDefault();


//     // const todoValue = event.target.children[0].todoValue;
//     // .value?.trim();


//     try {
//       event.preventDefault();


//       const todoValue = event.target.children[0].todoValue;

//       await axios.post(`${BASE_URL}/api/v1/todo`,

//         {
//           todo: todoValue,
//         }

//       );

//       getTodo()
//       event.target.reset();
//       // getTodo();
//     } catch (err) {
//       console.error('Error adding todo:', err);
//     }
//   };


//   const deleteTodo = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/api/v1/todo/${id}`);
//       getTodo();
//     } catch (err) {
//       console.error('Error deleting todo:', err);
//     }
//   };


//   const editTodo = async (id, newTodoValue) => {
//     try {
//       await axios.put(`${BASE_URL}/api/v1/todo/${id}`, { "todo": newTodoValue });
//       getTodo();
//     } catch (err) {
//       console.error('Error editing todo:', err);
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-3xl font-semibold text-indigo-600 text-center mb-6">
//           Todo App
//         </h1>

//         {/* Input Section */}
//         <form
//           onSubmit={addTodo}
//           className="mb-6"
//         >
//           <input
//             type="text"
//             placeholder="Enter your task"
//             className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
//           />
//         </form>

//         {/* Add Task Button */}
//         <button


//           className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
//           Add Task
//         </button>

//         {/* Todo List */}
//         <ul className="mt-6 space-y-4">
//           {todos?.map((todo) => (
//             <li className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200">
//               <span className="text-gray-700">{todo.todoContent}</span>
//               <div className="space-x-3">
//                 <button className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
//                   Edit
//                 </button>
//                 <button className="text-red-600 hover:text-red-700 focus:outline-none">
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}


//         </ul>
//       </div>
//     </div>
//   );
// }








  

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
// //       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
// //         <header className="mb-6 text-center">
// //           <h1 className="text-2xl font-bold text-gray-800">To-Do App</h1>
// //         </header>

// //         <main>






// //           <form className="flex items-center mb-6" onSubmit={addTodo}>
// //             <input
// //               type="text"
// //               name="todoInput"
// //               placeholder="Add a new task..."
// //               className="flex-1 px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <button
// //               type="submit"
// //               className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             >
// //               Add
// //             </button>
// //           </form>

// //           <ul className="space-y-4">
// //             {todos.map((todo) => (
// //               <li
// //                 key={todo.id}
// //                 className="flex items-center justify-between px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg shadow-sm text-gray-800"
// //               >
// //                 <span>{todo.todo}</span>
// //                 <div className="flex space-x-2">
// //                   <button
// //                     onClick={() => {
// //                       const newTodoValue = prompt('Edit your todo:', todo.todo);
// //                       // if (newTodoValue !== null) editTodo(todo.id, newTodoValue);
// //                     }}
// //                     className="px-3 py-1 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
// //                   >
// //                     Edit
// //                   </button>
// //                   <button
// //                     onClick={() => deleteTodo(todo.id)}
// //                     className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }





























// // import axios from 'axios'
// // import { useEffect, useState } from 'react'

// // export default function App() {
// //   const BASE_URL = 'http://localhost:5002'

// //   const [todos, setTodos] = useState([])

// //   const getTodo = async () => {
// //     const res = await axios(`${BASE_URL}/api/v1/todos`)
// //     const todosFromServer = res?.data?.data
// //     console.log('todosFromServer ', todosFromServer);

// //     setTodos(todosFromServer)
// //   }

// //   useEffect(() => {
// //     getTodo()
// //   }, [])

// //   const addTodo = async (event) => {

// //     try {
// //       event.preventDefault()

// //       const todoValue = event.target.children[0].value

// //       await axios.post(`${BASE_URL}/api/v1/todo`,
// //         {
// //           "todo": todoValue
// //         }
// //       )
// //       getTodo()

// //     } catch (err) {

// //     }
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
// //       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
// //         <header className="mb-6 text-center">
// //           <h1 className="text-2xl font-bold text-gray-800">To-Do App</h1>
// //         </header>

// //         <main>
// //           <form
// //             onSubmit={addTodo}
// //             className="mb-6"
// //           >
// //             <input
// //               type="text"
// //               placeholder="Enter your task"
// //               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400"
// //             />
// //           </form>

// //           {/* Add Task Button */}
// //           <button

// //             className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300">
// //             Add Task
// //           </button>

// //           <ul className="space-y-4">
// //             {todos?.map((todo) => (
// //               <li
// //                 // key={index}
// //                 className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg shadow-sm text-gray-800">
// //                 <span className="text-gray-700">{todo.todoContent}</span>

// //               </li>
// //             ))}
// //           </ul>
// //         </main>
// //       </div>
// //     </div >
// //   );
// // }


















// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // export default function App() {
// // //   const BASE_URL = 'http://localhost:5002';
// // //   const [todos, setTodos] = useState([]);

// // //   const getTodo = async () => {
// // //     try {
// // //       const res = await axios(`${BASE_URL}/api/v1/todos`);
// // //       const todosFromServer = res?.data?.data;
// // //       console.log('todosFromServer ', todosFromServer);
// // //       setTodos(todosFromServer);
// // //     } catch (error) {
// // //       console.error('Error fetching todos:', error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     getTodo();
// // //   }, []);

// // //   const addTodo = async (event) => {
// // //     try {
// // //       event.preventDefault();
// // //       const todoValue = event.target.elements.todoInput.value;

// // //       if (!todoValue.trim()) {
// // //         alert('Please enter a valid task!');
// // //         return;
// // //       }

// // //       await axios.post(`${BASE_URL}/api/v1/todo`, { todo: todoValue });
// // //       event.target.reset(); // Clear the input field after submission
// // //       getTodo();
// // //     } catch (err) {
// // //       console.error('Error adding todo:', err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
// // //       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
// // //         <header className="mb-6 text-center">
// // //           <h1 className="text-2xl font-bold text-gray-800">To-Do App</h1>
// // //         </header>

// // //         <main>
// // //           {/* Add onSubmit to the form */}
// // //           <form onSubmit={addTodo} className="flex items-center mb-6">
// // //             <input
// // //               type="text"
// // //               name="todoInput"
// // //               placeholder="Add a new task..."
// // //               className="flex-1 px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //             />
// // //             <button
// // //               type="submit"
// // //               className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //             >
// // //               Add
// // //             </button>
// // //           </form>

// // //           <ul className="space-y-4">
// // //             {todos?.map((todo) => (
// // //               <li
// // //                 key={todo.id} // Make sure to use a unique key for each item
// // //                 className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200"
// // //               >
// // //                 <span className="text-gray-700">{todo.todoContent}</span>
// // //                 <div className="space-x-3">
// // //                   <button className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
// // //                     Edit
// // //                   </button>
// // //                   <button className="text-red-600 hover:text-red-700 focus:outline-none">
// // //                     Delete
// // //                   </button>
// // //                 </div>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </main>
// // //       </div>
// // //     </div>
// // //   );
// // // }





















// // // // import React, { useEffect, useState } from 'react';
// // // // import axios from 'axios';

// // // // export default function App() {
// // // //   const BASE_URL = 'http://localhost:5002';

// // // //   const [todos, setTodos] = useState([]);

// // // //   const getTodo = async () => {
// // // //     const res = await axios(`${BASE_URL}/api/v1/todos`)
// // // //     const todosFromServer = res?.data?.data
// // // //     console.log('todosFromServer ', todosFromServer);

// // // //     setTodos(todosFromServer)
// // // //   };

// // // //   useEffect(() => {
// // // //     getTodo();
// // // //   }, []);

// // // //   const addTodo = async (event) => {

// // // //     try {
// // // //       event.preventDefault()

// // // //       const todoValue = event.target.children[0].value

// // // //       await axios.post(`${BASE_URL}/api/v1/todo`,
// // // //         {
// // // //           "todo": todoValue
// // // //         }
// // // //       )

// // // //       getTodo()

// // // //     } catch (err) {

// // // //     }
// // // //   }


// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
// // // //       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
// // // //         <header className="mb-6 text-center">
// // // //           <h1 className="text-2xl font-bold text-gray-800">To-Do App</h1>
// // // //         </header>

// // // //         <main>
// // // //           <form className="flex items-center mb-6">
// // // //             <input
// // // //               type="text"
// // // //               name="todoInput"
// // // //               placeholder="Add a new task..."
// // // //               className="flex-1 px-4 py-2 border rounded-l-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //             />
// // // //             <button
// // // //               type="submit"
// // // //               className="px-4 py-2 bg-blue-500 text-white font-medium rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //             >
// // // //               Add
// // // //             </button>
// // // //           </form>

// // // //           <ul className="space-y-4">
// // // //             {todos?.map((todo) => (
// // // //               <li className="flex justify-between items-center p-4 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition-all duration-200">
// // // //                 <span className="text-gray-700">{todo.todoContent}</span>
// // // //                 <div className="space-x-3">
// // // //                   <button className="text-indigo-600 hover:text-indigo-700 focus:outline-none">
// // // //                     Edit
// // // //                   </button>
// // // //                   <button className="text-red-600 hover:text-red-700 focus:outline-none">
// // // //                     Delete
// // // //                   </button>
// // // //                 </div>
// // // //               </li>
// // // //             ))}



// // // //           </ul>
// // // //         </main>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }














// ////////////////////////////////////











//   // import React, { useEffect, useState } from 'react';
//   // import axios from 'axios';
//   // import './App.css';

//   // export default function App() {
//   //   const BASE_URL = 'http://localhost:5002';
//   //   const [todos, setTodos] = useState([]);

//   //   const getTodo = async () => {
//   //     try {
//   //       const res = await axios.get(`${BASE_URL}/api/v1/todos`);
//   //       const todosFromServer = res.data?.data;
//   //       setTodos(todosFromServer);
//   //     } catch (err) {
//   //       console.error('Error fetching todos:', err);
//   //     }
//   //   };

//   //   useEffect(() => {
//   //     getTodo();
//   //   }, []);

//   //   const addTodo = async (event) => {
//   //     event.preventDefault();
//   //     const todoValue = event.target.todoInput.value;

//   //     if (todoValue.trim() === '') {
//   //       alert('Please enter a valid todo.');
//   //       return;
//   //     }

//   //     try {
//   //       await axios.post(`${BASE_URL}/api/v1/todo`, { "todo": todoValue });
//   //       event.target.reset();
//   //       getTodo();
//   //     } catch (err) {
//   //       console.error('Error adding todo:', err);
//   //     }
//   //   };

//   //   const deleteTodo = async (id) => {
//   //     try {
//   //       await axios.delete(`${BASE_URL}/api/v1/todo/${id}`);
//   //       getTodo();
//   //     } catch (err) {
//   //       console.error('Error deleting todo:', err);
//   //     }
//   //   };

//   //   const editTodo = async (id, newTodoValue) => {
//   //     try {
//   //       await axios.put(`${BASE_URL}/api/v1/todo/${id}`, { "todo": newTodoValue });
//   //       getTodo();
//   //     } catch (err) {
//   //       console.error('Error editing todo:', err);
//   //     }
//   //   };
