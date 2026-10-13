import express from 'express';
import { createHotelHandler, getHotelByIdHandler } from '../../controllers/hotel.controller.js';
import { validateRequestBody } from '../../validators/index.js';
import { hotelSchema } from '../../validators/hotel.validator.js';

const hotelRouter = express.Router();

hotelRouter.post('/',
    validateRequestBody(hotelSchema),
    createHotelHandler);

hotelRouter.get('/:id',getHotelByIdHandler);
export default hotelRouter;