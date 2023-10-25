import express from "express"
import { addFoodItem, bookFood, getFood, getFoodsByUploadedUser, getFoodsByUser } from "../controller/food.controller";

const foodRouter = express.Router();

foodRouter.get("/getFood",getFood);
foodRouter.post("/addFood",addFoodItem);
foodRouter.post("/bookFood",bookFood);
foodRouter.post("/getFoodByUser",getFoodsByUser);
foodRouter.post("/getFoodByUploadedUser",getFoodsByUploadedUser);

export default foodRouter;