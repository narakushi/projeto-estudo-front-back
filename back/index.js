const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());
app.use(express.json());

const bolos = [
    {
        id: 1,
        titulo: "bolo de chocolate",
        descricao: "com cobertura de chocolate e flocos de waffle",
    },
    {
        id: 2,
        titulo: "bolo de morango",
        descricao: "com melaço e pedaços de morango"
    },
    {
        id: 3,
        titulo: "bolo de limão",
        descricao: "com mousse de limão com raspinhas das cascas",
    }
];

app.get("/bolos", (req, res) => {
    res.json(bolos).status(200);
})

app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
})