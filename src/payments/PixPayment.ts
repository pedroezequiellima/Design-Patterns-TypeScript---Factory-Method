import { Payment } from "./Payment";

export class PixPayment implements Payment {
    pay(amount: number): void {
        console.log(`Processing Pix payment of $${amount}`);
        // Implement Pix payment logic here
    }
}