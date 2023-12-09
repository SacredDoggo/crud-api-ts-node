import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

import router from "./router";

dotenv.config();

// Our app
const app = express();

app.use(cors({
    credentials: true
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Server started at ${port}`);
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('error', (error: Error) => { console.log(error) });

app.use('/', router());