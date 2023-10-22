require("dotenv").config();
import express from "express";
import rotas from "./rotas";

const app = express();

app.use(express.json());

app.use(rotas);

app.listen(3000, () => {
  console.log(
    `------------------------------\n SERVIDOR EM PÉ NA PORTA 3000 \n------------------------------`
  );
});
