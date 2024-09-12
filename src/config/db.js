const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mariana_bmoraes:mDWPwYZKokY0Q9Lh@cluster0.kqjgr.mongodb.net/petshop",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro de conexão com MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;