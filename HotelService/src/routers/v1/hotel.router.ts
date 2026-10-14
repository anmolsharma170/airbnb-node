import express from 'express';
import { createHotelHandler, getAllHotelsHandler, getHotelByIdHandler, deleteHotelHandler } from '../../controllers/hotel.controller.js';
import { validateRequestBody } from '../../validators/index.js';
import { hotelSchema } from '../../validators/hotel.validator.js';

const hotelRouter = express.Router();

hotelRouter.post('/',
    validateRequestBody(hotelSchema),
    createHotelHandler);

hotelRouter.get('/:id',getHotelByIdHandler);

hotelRouter.get('/', getAllHotelsHandler);
hotelRouter.delete('/:id', deleteHotelHandler);
export default hotelRouter;