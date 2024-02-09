const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect("mongodb+srv://amanraj603:premraj1234@cluster1.b2ic7u6.mongodb.net/QuizApp?retryWrites=true&w=majority")
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
