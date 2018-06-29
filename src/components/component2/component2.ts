import { Request, Response } from 'express';

export class Component2 {
  public static getName(req: Request, res: Response) {
    res.send('Component 2');
  }
}
