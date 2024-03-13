const { default: mongoose } = require("mongoose");
const uri =
  "mongodb+srv://vkscantho:thang1310@cluster0.qfl853m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbConnect = () => {
  try {
    const connect = mongoose.connect(uri);
    console.log("Database connect Success");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { dbConnect };
