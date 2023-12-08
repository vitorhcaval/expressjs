const express = require("express")
const usersRouter = require("./src/routes/user")


const app = express()
app.use(express.json())
require("./config/database")

app.use("/user", usersRouter)


app.listen(3000, () => {
  console.log("Servidor rodando")
})