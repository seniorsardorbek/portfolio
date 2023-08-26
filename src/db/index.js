const mongoose = require("mongoose");
const config = require("../shared/config");

module.exports = function () {
  return mongoose
    .connect(
      `mongodb+srv://sardorbekmusilman:Just_password03@cluster0.ysxkkxu.mongodb.net/blogs`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 150000, // Increase timeout to 15 seconds
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("DB ga ulandi.");
    })
    .catch((err) => {
      console.log("DB da xatolik: ", err);
    });
};
