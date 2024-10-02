import express from 'express';
import AuthController from '../controllers/AuthController';
import { Schemas, ValidateSchema } from '../middlewares/Validation';

const router = express.Router();

router.post("/register", AuthController.handleRegister);
router.post("/login", AuthController.handleLogin);

export default router;
