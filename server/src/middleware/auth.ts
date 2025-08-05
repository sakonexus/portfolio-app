import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
dotenv.config();

interface JwtPayload {
  appId: string;
  role: string;
}

interface AuthenticatedRequest extends Request {
  user?: JwtPayload;
}

const JWT_SECRET = process.env.JWT_SECRET!;

export const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token missing in Authorization header' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.error("Token verification failed:", err.message);
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user as JwtPayload;
    next();
  });
};