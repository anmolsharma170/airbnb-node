import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelByIdService, getAllHotelsService, deleteHotelService, updateHotelService} from "../services/hotel.service.js";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction){
    // 1) Call the service layer
    const hotelResponse = await createHotelService(req.body);
    // 2) Send the Resposne
    res.status(StatusCodes.CREATED).json({
        message: "Hotel created successfully",
        data: hotelResponse,
        success: true
    })
}

export async function getHotelByIdHandler(req:Request, res: Response,next: NextFunction){
    const hotelResponse = await getHotelByIdService(Number(req.params.id));
    res.status(StatusCodes.OK).json({
        message: "Hotel found successfully",
        data: hotelResponse,
        success:true
    })
}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction){
    const hotelsResponse = await getAllHotelsService();
    res.status(StatusCodes.OK).json({
        message: "Hotels retrieved successfully",
        data: hotelsResponse,
        success:true
    })
}

export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction){
    const hotelResponse = await deleteHotelService(Number(req.params.id));
    res.status(StatusCodes.OK).json({
        message: "Hotel deleted successfully",
        data: hotelResponse,
        success:true
    })
}

export async function updateHotelHandler(req: Request, res: Response, next: NextFunction){
    const hotelResponse = await updateHotelService(Number(req.params.id), req.body);
    res.status(StatusCodes.OK).json({
        message: "Hotel updated successfully",
        data: hotelResponse,
        success:true
    })
}