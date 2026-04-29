import { Payment } from "./Payment";

export class BoletoPayment implements Payment {
    pay(amount: number): void {
        console.log(`Processing Boleto payment of $${amount}`);
        // Implement Boleto payment logic here

    }
}