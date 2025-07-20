  import dotenv from 'dotenv';
  dotenv.config({path:'./config/config.env'});
  
  
  import app from "./app.js";
  const PORT = process.env.PORT||4000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
