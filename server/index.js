const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const { connect } = require('http2')

const app = express()

app.use(cors())

var con = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "",
    database: "zawodowe"
})

con.connect(function(err){

    if(err) res.send(err)   
    console.log("Połączono")

})

app.get("/add/:kandydat/:pesel",function(req,res){

    const kandydat = req.params.kandydat
    const pesel = req.params.pesel

    const sql = `INSERT INTO wybory (kandydat,PESEL) VALUES ('${kandydat}','${pesel}')`

    con.query(sql,function(err,result,fields){

        if(err){
            res.send(err)
            res.send("Nie dodano")
        }
        console.log("Dodano")

    })


})


app.get("/select",function(req,res){

    const sql = `SELECT * FROM wybory`
    
    con.query(sql,function(err,result,fields){

        if(err){
            res.send(err)

        }
        res.send(result)
        console.log(fields)
    })

})






app.listen(3000)