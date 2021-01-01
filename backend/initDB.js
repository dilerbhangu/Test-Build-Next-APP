import mongoose from "mongoose";

function initDB() {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  mongoose.connection.on("connected", () => {
    console.log("connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.log("error connecting ", err);
  });
}

export default initDB;
