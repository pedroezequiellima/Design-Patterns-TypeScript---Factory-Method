import { PaymentFactory } from "../payments/PaymentFactory";

export class CheckoutService {
    Checkout(paymentType: any, amount: any) {
        throw new Error("Method not implemented.");
    }
    processPayment(amount: number, paymentType: string): void {
        const payment = PaymentFactory.createPayment(paymentType);
        payment.pay(amount);
    }
}
