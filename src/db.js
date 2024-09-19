const mongoose = require("mongoose");

const db = "mongodb://localhost:27017/locadora"

async function connect() {
    await mongoose.connect(db);
}

connect()

.then(() => console.log("Conectou!!!"))

.catch((err) => console.log(err))

module.exports = mongoose