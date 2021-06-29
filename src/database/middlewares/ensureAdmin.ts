import { Request, Response, NextFunction, response } from "express";

export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const admin = false; // Check if user is admin, but is mocked

  if (admin) return next(); //Follow the course of request

  return res.status(401).json({
    error: "Unauthorized",
  });
}
