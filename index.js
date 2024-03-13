const express = require("express");
const app = express();
const port = 5000;
const userRouter = require("./routers");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const db = require("./config/dbconect");
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
// connect db
db.dbConnect();
// route
userRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
