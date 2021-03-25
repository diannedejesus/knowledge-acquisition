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
        id: 2,
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

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


