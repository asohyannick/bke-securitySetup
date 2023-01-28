import express from 'express';
import { login,dashBoard } from '../controllers/task.js';
import authenticationMiddleware from '../middlewares/auth.js';
const router = express.Router();
router.route('/login').post(login);
router.route('/dashBoard').get(authenticationMiddleware,dashBoard);
export default router;