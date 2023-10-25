import express from "express";
import cors from "cors";
import foodRouter from "../routes/GetFood.route";
const app = express();
export default app;


app.get("/",(req,res)=>{
  return  res.send("Hello World");
});

app.use(express.json())

app.use(cors({
    origin:"*"
}))


app.use("/api/v1",foodRouter)
