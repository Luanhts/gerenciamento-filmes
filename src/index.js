const express = require("express");
const connectDB = require("./db");
const filmeRoutes = require("./routes/filme_routes");
const diretorRoutes = require("./routes/diretor_routes");
const produtoraRoutes = require("./routes/produtora_routes");
const port = 3000

const app = express();


connectDB();

app.use(express.json());

app.use("/filmes", filmeRoutes);
app.use("/diretor", diretorRoutes);
app.use("/produtora", produtoraRoutes);

app.listen(port, () => {
    console.log(`${port}`)
})