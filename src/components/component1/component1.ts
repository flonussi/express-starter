import { Request, Response } from 'express';

export class Component1 {
  public static getName(req: Request, res: Response) {
    res.send('Component 1');
  }
}
