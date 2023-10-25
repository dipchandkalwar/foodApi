import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma";

export const getFood = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const foodList = await prisma.food.findMany({
            where:{
                isBooked:false,
            },
           
        });
        // console.log(foodList);

       
      return res.json({"Foods":foodList});
    } catch (error) {
        next(error);
     }

};


// add food 
export const addFoodItem = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {name,email,phone,foods} = req.body;
  const foodItem =   await prisma.food.create({
            data:{
                name,
                email,
                phone,
                foods,
            }
        });

        if(!foodItem){
            return res.status(400).json({
                message:"Food item not added"
            })
        }

        return res.status(200).json({
            message:"Food item added successfully"
        })
      
    } catch (error) {
        next(error);
    }
}

// book food
export const bookFood = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {id,useremail} = req.body;
        const foodItem = await prisma.food.update({
            where:{
                id:id,
                isBooked:false,
            },
            data:{
                isBooked:true,
                bookedBy:useremail
            }
        });

        if(!foodItem){
            return res.status(400).json({
                message:"Food item not booked"
            })
        }

        return res.status(200).json({
            message:"Food item booked successfully"
        })
    } catch (error) {
        next(error);
    }
}

//getFoodsByUser

export const getFoodsByUser = async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {useremail} = req.body;
        const foodItem = await prisma.food.findMany({
            where:{
                bookedBy:useremail,

            },
        });

        if(!foodItem){
            return res.status(400).json({
                message:"Food item not booked"
            })
        }

        return res.status(200).json({
            message:"Food item booked successfully",
            foodItem
        })
    } catch (error) {
        next(error);
    }
}
