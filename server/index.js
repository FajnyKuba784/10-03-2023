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

    if(err) console.log(err)   
    console.log("Połączono")

})

app.get("/add/:kandydat/:pesel",function(req,res){

    
    const pesel = req.params.pesel

    const sql = `INSERT INTO wybory (kandydat,PESEL) VALUES ('1','${pesel}')`

    con.query(sql,function(err,result,fields){

        if(err){
            console.log(err)
            console.log("Nie dodano")
        }
        console.log("Dodano")

    })


})

app.get("/add/:kandydat/:pesel",function(req,res){

    
    const pesel = req.params.pesel

    const sql = `INSERT INTO wybory (kandydat,PESEL) VALUES ('2','${pesel}')`

    con.query(sql,function(err,result,fields){

        if(err){
            console.log(err)
            console.log("Nie dodano")
        }
        console.log("Dodano")

    })


})

app.get("/add/:kandydat/:pesel",function(req,res){

    
    const pesel = req.params.pesel

    const sql = `INSERT INTO wybory (kandydat,PESEL) VALUES ('3','${pesel}')`

    con.query(sql,function(err,result,fields){

        if(err){
            console.log(err)
            console.log("Nie dodano")
        }
        console.log("Dodano")

    })


})

app.get("/select",function(req,res){

    const sql = `SELECT * FROM wybory`
    
    con.query(sql,function(err,result,fields){

        if(err){
            console.log(err)

        }
        res.send(result)
        console.log(fields)
    })

})





app.listen(3000)