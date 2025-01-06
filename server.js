import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5002;

const todos = [];


app.use(express.json()); 
app.use(cors({ origin: ['http://localhost:5173', 'https://frontend.surge.sh'] }))



app.get("/api/v1/todos", (request, response) => {
  const message = !todos.length ? "todos empty" : "ye lo sab todos";

  response.send({ data: todos, message: message });
});


app.post("/api/v1/todo", (request, response) => {
  const obj = {
    todoContent: request.body.todo,
    id: String(new Date().getTime()),
  };

  todos.push(obj);

  response.send({ message: "todo add hogya hy", data: obj });
});



app.patch("/api/v1/todo/:id", (request, response) => {
  const id = request.params.id;

  let isFound = false;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {


<<<<<<< HEAD
      todos[i].todoContent = request.body.todoContent;
      isFound = true;
      break;
=======
app.patch('/edit-todo/:id', (request, response) => {
    const id = request.params.id

    let isFound = false;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
            // idher product mil chuka hy (ab us product ko edit karna hy)

            todos[i].todoContent = request.body.todoContent;
            isFound = true;
            break;
        }
    }

    if (isFound) {
        response.status(201).send({
            data: { todoContent: request.body.todoContent, id: id, },
            message: 'todo success'
        })
    } else {
        response.status(200).send({ data: null, message: 'todo not found' });
>>>>>>> 11bcf7b8032851a7f6ce833b4ddac7b32186fdf4
    }
  }


  if (isFound) {
    response.status(201).send({
      data: { todoContent: request.body.todoContent, id: id },
      message: "todo updated successfully!",
    });
  } else {
    response.status(200).send({ data: null, message: "todo not found" });
  }
});


app.delete("/api/v1/todo/:id", (request, response) => {
  const id = request.params.id;

  let isFound = false;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
   

      todos.splice(i, 1);

      isFound = true;
      break;
    }
  }

  if (isFound) {
    response.status(201).send({
      message: "todo deleted successfully!",
    });
  } else {
    response.status(200).send({ data: null, message: "todo not found" });
  }
});

//

app.use((request, response) => {
  response.status(404).send("no route found!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
























// import express from 'express'
// import cors from "cors";


// const app = express()
// const port = process.env.PORT || 5001;



// const todos = [{}]


// app.use(express.json())    // To convert body into Json

// app.use(cors({ origin: ['http://localhost:5173', 'https://frontend.surge.sh'] }))




// app.get('/api/v1/todos', (request, response) => {

//     const message = !todos.length ? "todos empty" : "hello"

//     response.send({ data: todos, message: message });
// });


// app.post('/api/v1/todo', (request, response) => {

//     const obj = {
//         todoContent: request.body.todo,
//         id: String(new Date().getTime()),
//     }


//     todos.push(obj);

//     response.send({ message: "todo added", data: obj });
// });




// app.patch('/api/v1/todo/:id', (request, response) => {
//     const id = request.params.id

//     let isFound = false;
//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].id === id) {
//             // idher product mil chuka hy (ab us product ko edit karna hy)

//             todos[i].todoContent = request.body.todoContent;
//             isFound = true;
//             break;
//         }
//     }

//     if (isFound) {
//         response.status(201).send({
//             data: { todoContent: request.body.todoContent, id: id, },
//             message: 'todo success'
//         })
//     } else {
//         response.status(200).send({ data: null, message: 'todo not found' });
//     }

    
//     // console.log("ye hy id: ", id);

// });



// app.delete('/api/v1/todo/:id', (request, response) => {
//     const id = request.params.id


//     let isFound = false;
//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].id === id) {

//             todos.splice(i, 1)

//             // todos[i].todoContent = request.body.todoContent;
//             isFound = true;
//             break;
//         }
//     }

//     if (isFound) {
//         response.status(201).send({
//             // data: { todoContent: request.body.todoContent, id: id, },

//             message: 'todo deleted'
//         })
//     } else {
//         response.status(200).send('todo not found')
//     }

// })



// // 

// app.use((request, response) => {
//     response.status(404).send("no route found")
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })


