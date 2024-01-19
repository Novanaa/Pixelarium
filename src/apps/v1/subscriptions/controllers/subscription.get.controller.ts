import { Request, Response } from "express";
import pricesList from "../../../../../resources/prices-list.json";

export function prices(_: Request, res: Response): Response {
  return res.status(200).json(pricesList);
}
