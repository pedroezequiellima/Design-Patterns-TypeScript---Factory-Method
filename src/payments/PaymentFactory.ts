import { Payment } from "./Payment";
import { CardPayment } from "./CardPayment";
import { BoletoPayment } from "./BoletoPayment";
import { PixPayment } from "./PixPayment";

export class PaymentFactory {
    static createPayment(type: string): Payment {
        switch (type) {
            case "card":
                return new CardPayment();
            case "boleto":
                return new BoletoPayment();
            case "pix":
                return new PixPayment();
            default:
                throw new Error("Invalid payment type");
        }
    }
}