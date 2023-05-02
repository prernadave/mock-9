const express = require('express')
const { connection } = require('./config/db')
const { register } = require('./routers/register')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome')
})
app.use('/api', register)

// Server
app.listen(5000, async () => {
    try {
        await connection
        console.log('connected to db');
        console.log('server is running on port 5000');
    } catch (error) {
        console.log(error);
        console.log('can not connect');
    }
})