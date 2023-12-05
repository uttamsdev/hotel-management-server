import express from 'express';
import { UsersControllers } from './user.controller';
const router = express.Router();

router.post("/store-user",UsersControllers.StoreUser);
router.get("/get-users",UsersControllers.getAllUsers);
router.get("/:email",UsersControllers.getSingleUser);
router.get("/admin/:email",UsersControllers.checkAdmin);
export const UsersRouter = router;