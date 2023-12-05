import express from 'express';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post('/add-room', ProductControllers.addRoom);
router.get('/rooms', ProductControllers.getAllRooms);
router.get("/search-available-rooms", ProductControllers.searchAvailableRooms)
router.get("/search-single-available-rooms", ProductControllers.searchSingleAvailableRooms)
router.get('/rooms/:id', ProductControllers.getSingleRoom);
router.delete('/rooms/:id', ProductControllers.deleteRoom);
router.put('/rooms/:id', ProductControllers.updateRoom);
export const ProductRoutes = router;
