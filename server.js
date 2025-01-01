import express, { request, response } from 'express'

const app = express()
const port = 5001



const todos = []


app.use(express.json())



app.get('/get-all-todos', (request, response) => {
    response.send(todos)
})


app.post('/add-todo', (request, response) => {
    todos.push(request.body.todos)
})

app.patch('/edit-todo/:id', (request, response) => { })


app.delete('/delete-todo/:id', (request, response) => { })






// 

app.use((request, response) => {
    response.status(404).send("no route found")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


