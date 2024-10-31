import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1812",
    database:"mediweb"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
    res.json("hello this is it")
})

app.get("/appointments", (req, res)=>{
    const q = "SELECT * FROM appointments"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.post("/appointments", (req, res)=>{
    const q = "INSERT INTO appointments (`doctorName`,`appointmentDesc`,`appointmentDate`) VALUES (?)"

    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const values = [
        req.body.doctorName,
        req.body.appointmentDesc, 
        currentDate]
    db.query(q,[values], (err, data)=>{
        if(err) return res.json(err)
            return res.json("Appointment created successfully!")
    })
})

app.listen(8800, ()=>{
    console.log("Connected to backend!")
})