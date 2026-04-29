import { Payment } from "./Payment";

export class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`Processing Card payment of $${amount}`);
        // Implement Card payment logic here
    }
}
