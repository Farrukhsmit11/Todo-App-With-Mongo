import express from 'express';
import cors from "cors";
import 'dotenv/config';
import './database.js';
import { Todo } from './models/index.js';

const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://todo-app-with-react.surge.sh"
    ]
  })
);

app.get("/api/v1/todos", async (request, response) => {
  try {
    const todos = await Todo.find();
    response.status(200).send(todos);
  } catch (err) {
    response.status(500).send("Internal server error");
  }
});

app.post("/api/v1/todo", async (request, response) => {
  try {
    const result = await Todo.create(request.body);

    response.status(201).send({
      message: "Todo added successfully",
      data: result,
    });
  } catch (error) {
    response.status(500).send({
      message: "An error occurred while adding the todo",
      error: error.message,
    });
  }
});

app.patch("/api/v1/todo/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Todo.findByIdAndUpdate(
      id,
      { todoContent: request.body.todoContent },
      { new: true }
    );

    if (result) {
      response.status(200).send({
        data: result,
        message: "Todo updated successfully",
      });
    } else {
      response.status(404).send({
        data: null,
        message: "Todo not found",
      });
    }
  } catch (error) {
    response.status(500).send({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.delete("/api/v1/todo/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Todo.findByIdAndDelete(id);

    if (result) {
      response.status(200).send({
        message: "Todo deleted successfully",
      });
    } else {
      response.status(404).send({
        message: "Todo not found",
      });
    }
  } catch (error) {
    response.status(500).send({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.use((request, response) => {
  response.status(404).send("No route found!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});