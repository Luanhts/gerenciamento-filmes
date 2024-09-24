
const bcrypt = require('bcrypt')

const userSchema = new db.userSchema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    tipo: { 
        type: String,
        required: true,
        enum: ["ADM", "USR"],
        default: "USR"
    },
})
// função de criptografia da senha 
userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 10);
})

const User = db.model("User", userSchema)

module.exports = User;
