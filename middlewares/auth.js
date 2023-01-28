import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
export const authenticationMiddleware = async (req, res) => {
 const authHeader = req.headers.authorization;
 if(!authHeader || !authHeader.startsWith('Bearer')) {
  return await res.status(StatusCodes.UNAUTHORIZED).json({msg:'Please, you are not authorized to access this route.'});
 }
 const token =  authHeader.split('')[1];
 try {
  const decoded = jwt.verify(token,process.env.JWT_WEBTOKENS);
  const { id, username } = decoded;
  req.user = {id, username};
  next();
 } catch(error) {
  res.status(StatusCodes.UNAUTHORIZED).json({msg:'Please, you are not authorized to access this route'});
 }
}

export default authenticationMiddleware;