const connectToMongo = require('./db');
const express = require('express') 
var cors= require('cors')
connectToMongo();

const app = express()
const port = 5000  
app.use(cors({
  origin: 'http://localhost:3000',  // Your frontend URL
}));

app.use(express.json())
app.use(cors())




//available routes
app.use('/api/getInfo',require('./routes/getInfo'))  


app.listen(port, () => {        //ths starts the express server to listen for request and response on port 3000
  console.log(`Example app listening on port ${port}`)
})