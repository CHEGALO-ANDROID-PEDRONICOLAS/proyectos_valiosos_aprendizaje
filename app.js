const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

app.get('/', (req,res)=>{
    //res.send('<h1>app chat<br>ruta raiz del servidor con metodo express</h1>')
    res.sendFile(`${__dirname}/cliente/index.html`)
})
server.listen(3000,()=>{
    console.log('escuchando desde el servidor 300')
})

