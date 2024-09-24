const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use("/api/v1", auth);
app.use("/api/v2", list);


app.listen(4000, () => {
  console.log("Server Started");
});
