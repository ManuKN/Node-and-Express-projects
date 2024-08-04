const express = require('express');
const app = express();
const tasks = require('./Routes/tasks');
const connectDB = require('./DB/connect');
require('dotenv').config();

console.log('Task Manager App')
//middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
// app.get('/hello',(req , res) => {
//     const message = 'Task manager APP'
//     res.send('Task manager APP');
// })

app.use('/api/v1/tasks',tasks)

const port = 3000
const start = async() => {
    try{
     await connectDB(process.env.MONGOURL)
     app.listen(port , console.log(`server is now listening on port-${port}`));
    }
    catch(err){
        console.log(err)
    }
}

start()
