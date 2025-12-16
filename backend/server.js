var express = require("express");
var bodyparser = require("body-parser");
var Books = require("./BooksSchema");
var mongodbConnected = require("./MongoDBConnect");
var cors = require("cors");

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

app.get("/", function (req, res) {
  res.send("This is default");
});

app.get("/allbooks", async function (req, res) {
  const d = await Books.find();
  res.json(d);
});

app.get("/getbook/:id", async function (req, res) {
  let id = req.params.id;
  let book = await Books.findById(id);
  res.json(book);
});

app.post("/addbooks", function (req, res) {
  let newbook = new Books(req.body);
  newbook
    .save()
    .then((todo) => {
      res.status(200).json({ books: "book added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new book failed");
    });
});

app.post("/updatebook/:id", async function (req, res) {
  let id = req.params.id;
  await Books.findByIdAndUpdate(id, req.body);
  res.send("Book Updated");
});

app.post("/deleteBook/:id", async function (req, res) {
  let id = req.params.id;
  await Books.findByIdAndDelete(id);
  res.send("Book Deleted");
});

mongodbConnected();

app.listen(5000, function () {
  console.log("Server running on port 5000");
});
