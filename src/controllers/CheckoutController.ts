import { CheckoutService } from "../services/CheckoutService";
import { Request, Response } from "express";

const service = new CheckoutService();

export class CheckoutController {
    
    handle (req: Request, res: Response): Response {
        const { amount, paymentType } = req.body;

        service.Checkout(paymentType, amount);

        return res.json({message: "Payment processed sucessfully"});
    }
}