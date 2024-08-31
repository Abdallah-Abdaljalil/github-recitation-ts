// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";
import { Request, Response } from "express";

export default (req: Request, res: Response): void => {
  const { num } = req.params;

  // Ensure num is a string before parsing
  const parsedNum = parseInt(num as string, 10);

  const fibN = fibonacci(parsedNum);
  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};
