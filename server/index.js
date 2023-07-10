import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

dotenv.config({ path: "../.env" });

//importing required routes
import hello from "./routes/hello.js";

app.use("/user", hello);

console.log("PORT from .env:", process.env.PORT);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
