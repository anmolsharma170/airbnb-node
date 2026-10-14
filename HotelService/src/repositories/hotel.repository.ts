import logger from "../config/logger.config.js";
import Hotel from "../db/models/hotel.js";
import { createHotelDTO } from "../dto/hotel.dto.js";
import { NotFoundError } from "../utils/errors/app.error.js";

export async function createHotel(hotelData: createHotelDTO) {
    const hotel = await Hotel.create({
        name: hotelData.name,
        address: hotelData.address,
        location: hotelData.location,
        ...(hotelData.rating !== undefined ? { rating: hotelData.rating } : {}),
        ...(hotelData.ratingCount !== undefined ? { ratingCount: hotelData.ratingCount } : {}),
    });
    logger.info(`Hotel created: ${hotel.id}`);
    return hotel;
}

export async function getHotelById(id:number){
    const hotel = await Hotel.findByPk(id);
    if(!hotel){
        logger.error(`Hotel not found ${id}`);
        throw new NotFoundError(`Hotel with id ${id} not found`);
    }
    logger.info(`Hotel found: ${hotel.id}`);
    return hotel;
}

export async function getAllHotels(){
    const hotels = await Hotel.findAll({
        where:{
            deletedAt:null
        }
    });
    if(!hotels){
        logger.error("No hotels found");
        throw new NotFoundError(`No hotel found`);
    }
    logger.info(`Hotels found: ${hotels.length}`);
    return hotels;
}

export async function softDeleteHotel(id:number){
    const hotel = await Hotel.findByPk(id);
    if(!hotel){
        logger.error(`Hotel not found: ${id}`);
        throw new NotFoundError(`Hotel with id ${id} not found`);
    }
    hotel.deletedAt = new Date();
    await hotel.save();
    logger.info(`Hotel soft deleted ${hotel.id}`);
    return true;
}