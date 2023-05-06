/** @format */

const notes = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
    };

    readAndAppend(newNote, "./db/db.json");
    res.json("Note Added");
  } else {
    res.errored("There was a problem adding your note");
  }
});

module.exports = notes;