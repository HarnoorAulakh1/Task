import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import pairs from "./Schema/Pairs.js";
import getRouter from "./Routes/getRoutes.js";
import updateRouter from "./Routes/updateRoutes.js";
import insertRouter from "./Routes/insertRoutes.js";
import deleteRouter from "./Routes/deleteRoutes.js";

const app = express();
app.use(bodyParser.json());

const PORT = 4000;

app.use("/update", updateRouter);
app.use("/insert", insertRouter);
app.use("/",getRouter);
app.use("/delete", deleteRouter);

app.get("/", async(req, res) => {
    const data=await pairs.find();
    res.send(data);
});
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});


// 65fd1c05c675c113f8d4648f