const express = require('express')
const app = express()

const phonebook = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-12456",
    },
    {
        id: 2,
        name: "Dan Abramov",
        number: "12-43-234345",
    },
    {
        id: 3,
        name: "Arto Hellas",
        number: "39-23-6423122",
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hi, you have reached my phonebook api</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(phonebook)
})

app.get('/api/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${phonebook.length} people</p><br>${new Date()}`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


