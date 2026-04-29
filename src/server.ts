import express, { Express } from "express";
import { CheckoutController } from "./controllers/CheckoutController";

const app = express();
app.use(express.json());

const Controller = new CheckoutController();

app.post("/checkout", (req, res) => {
    Controller.handle(req, res);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


