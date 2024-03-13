const userRouter = require("./UserRouter");
function route(app) {
  app.use("/", userRouter);
}

module.exports = route;
