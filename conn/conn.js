const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://akencool57:020509@cluster0.iailp.mongodb.net/todolist"
      )
      .then(() => {
        console.log("Conectado");
        console.log("Executando na porta: http://localhost:1000")
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
