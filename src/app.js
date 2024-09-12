const express = require("express");
const connectDB = require("./config/db");
const cliente_routes = require("./routes/cliente_route.js");
const pet_routes = require("./routes/pet_route.js");

const app = express();
const port = 4000;

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use("/clientes", cliente_routes);
app.use("/pets", pet_routes);

app.listen(port, () => {
  console.log(`Server running in ${port} port`);
});
