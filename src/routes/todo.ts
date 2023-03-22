import express, { Request, Response } from "express";
import { Todo } from "../../models/todo";

const router = express.Router();

router.get("/api/todo", async (req: Request, res: Response) => {
  try {
    console.log("work");
    const todo = await Todo.find({});
    return res.status(200).send(todo);
  } catch (error) {
    console.log(error);
  }
});

router.post("/api/todo", async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const todo = Todo.build({ title, description });
  await todo.save();
  return res.status(201).send(todo);
});

export { router as todoRouter };