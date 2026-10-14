import Hotel from "../db/models/hotel.js";
import { createHotelDTO } from "../dto/hotel.dto.js";
import { createHotel, getAllHotels, getHotelById } from "../repositories/hotel.repository.js";

export async function createHotelService(hotelData: createHotelDTO){
    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelByIdService(id:number){
    const hotel = await getHotelById(id);
    return hotel;
}

export async function getAllHotelsService(){
    const hotels = await getAllHotels();
    return hotels;
}

export async function deleteHotelService(id:number){
    const hotel =await getHotelById(id);
    await hotel.destroy();
    return hotel;
}

export async function updateHotelService(id:number, hotelData:createHotelDTO){
    const hotel = await getHotelById(id);
    await hotel.update(hotelData);
    return hotel;
}