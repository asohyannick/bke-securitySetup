import express from 'express';
import connectDB from './db/connect.js';
import notFound from './errors/not-found.js';
import errorMiddleware from './errors/error-handler.js'
import mainRouter from './routes/task.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/v1', mainRouter);
app.use(notFound);
app.use(errorMiddleware);
const PORT = process.env.PORT || PORT;
const start = async() => {
 try{
   return await connectDB(process.env.MUNGO_URI_CONNECTIONSTRING),
   app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
   })
 }catch(error) {
  console.log({msg:error});
 }
}
start()
