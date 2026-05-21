
import express from 'express'
import cors from "cors";
import 'dotenv/config'
import './database.js'
import { Todo } from './models/index.js';


const app = express()
const port = process.env.PORT || 5002;


app.use(express.json())

app.use(
  cors({ origin: ["http://localhost:5173", "https://todo-app-with-react.surge.sh/"] }),
);


app.get("/api/v1/todos", async (request, response) => {
  try {
    const todos = await Todo.find()
  } catch (err) {
    response.status(500).send("Internal server error")
  }
});

app.post('/api/v1/todo', async (request, response) => {

  try {
    await Todo.create()

    response.send({ message: "todo add ho gya hai", data: result });

  } catch (error) {
    response.status(500).send({ message: "An error occurred while adding the todo", error: error.message });
  }
}
);



app.patch('/api/v1/todo/:id', async (request, response) => {
  const id = request.params.id


  const result = await Todo.findByIdAndUpdate(id,

    { todoContent: request.body.todoContent }
  )

  console.log("result=>", result);


  if (result) {
    response.status(201).send({
      data: { todoContent: request.body.todoContent, id: id, },
      message: 'todo success'
    });
  } else {
    response.status(200).send({ data: null, message: 'todo not found' });
  }
});


app.delete('/api/v1/todo/:id', async (request, response) => {
  const id = request.params.id
  const result = await Todo.findByIdAndDelete(id)

  if (result) {
    response.status(201).send({
      message: 'todo deleted'
    });
  } else {
    response.status(200).send('todo not found')
  }
});


app.use((request, response) => {
  response.status(404).send("no route found!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})