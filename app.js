const express = require("express");

const app = express();

const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const newDate = new Date();
  const result = addDays(
    new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
