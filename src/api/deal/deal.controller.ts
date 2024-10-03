import { Request, Response } from 'express';
import DealService from './deal.service';

class DealController {
  dealService: DealService;
  constructor() {
    this.dealService = new DealService();
  }
  async findById(req: Request, res: Response) {
    const id = req.query.id as string;
    const data = await this.dealService.findById(id);
    res.status(200).json(data);
  }
  async create(req: Request, res: Response) {
    const data = await this.dealService.create(req.body);
    res.status(200).json(data);
  }
}

const dealController = new DealController();
export default dealController;
