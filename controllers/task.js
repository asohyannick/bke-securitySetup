import { StatusCodes } from 'http-status-codes';
import asyncWrapper from '../middlewares/async.js';
import express from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();
export const login = asyncWrapper(async(req, res, next) => {
 const { username, password, age, email, country, status} = req.body;
 if(!username || !password || !age ||  !email || !country || !status) {
   return await res.status(StatusCodes.BAD_REQUEST).json({msg:
    'Please, provide username,password,age value,email address,country of origin,and marital status(married or single).'});
 }
 const id = new Date().getDate();
 const token = jwt.sign({id, username}, process.env.JWT_WEBTOKENS, {expiresIn:'30d'});
 if(token) {
  return await res.status(StatusCodes.OK).json({msg:'User has been created with our new token', token});
 }
});

export const dashBoard = asyncWrapper(async(req, res, next) => {
 const winningNumber = Math.floor(Math.random()* 10000);
 res.status(StatusCodes.OK).json({msg:`Hello ${req.user.username}`, Great: `Here is your winingNumber ${winningNumber}`});
});

export default router;