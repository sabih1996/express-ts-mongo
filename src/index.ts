import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import { todoRouter } from "./routes/todo";

const app = express();
app.use(json());
app.use(todoRouter);

app.get("/", (req, res) => {
  return res.json("Hello ts");
});
mongoose.connect(
  "mongodb+srv://hafiz498:hafiz498@cluster0.ljphczl.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to database");
  }
);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
