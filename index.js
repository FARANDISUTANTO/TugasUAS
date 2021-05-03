const express = require("express");
const axios = require("axios");
const app = express();

app.get("/objects", async (req, res) => {
  const response = await axios.get(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects"
  );
  res.send(response.data);
});

app.get("/objects/search", async (req, res) => {
  const title = req.query.title;
  const response = await axios.get(
    "https://collectionapi.metmuseum.org/public/collection/v1/search?q=" + title
  );
  res.send(response.data);
});

app.get("/objects/:objectsID", async (req, res) => {
  const objectsID = req.params.objectsID;
  const response = await axios.get(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/" +
      objectsID
  );
  res.send(response.data);
});

app.get("/departments", async (req, res) => {
  const response = await axios.get(
    "https://collectionapi.metmuseum.org/public/collection/v1/departments"
  );
  res.send(response.data);
});

const server = app.listen(5000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Testing UAS at http://%s:%s", host, port);
});
