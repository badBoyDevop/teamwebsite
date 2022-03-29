import express from 'express';

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/alejandro', (req,res) => {res.send("Hello Alejandro!")});

app.get('/derek', (req,res) => {res.send("Hello Derek")});

app.get('/dorian', (req,res) => {res.send("Hello Dorian")});

app.get('/josh', (req,res) => {res.send("Hello Josh")});

app.listen(port, ()=>console.log("Listening"));