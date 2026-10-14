import Hotel from "../db/models/hotel.js";
import { createHotelDTO } from "../dto/hotel.dto.js";
import { createHotel, getHotelById } from "../repositories/hotel.repository.js";

export async function createHotelService(hotelData: createHotelDTO){
    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelByIdService(id:number){
    const hotel = await getHotelById(id);
    return hotel;
}

export async function getAllHotelsService(){
    const hotels = await Hotel.findAll();
    return hotels;
}

export async function deleteHotelService(id:number){
    const hotel =await getHotelById(id);
    await hotel.destroy();
    return hotel;
}