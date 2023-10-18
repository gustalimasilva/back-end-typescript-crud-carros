import ('dotenv').config()
import express from "express";

const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log(`\n SERVIDOR EM PÉ NA PORTA 3000 \n`);
});
