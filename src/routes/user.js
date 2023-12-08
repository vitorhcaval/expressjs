const express = require("express")

const router = express.Router()

// Podemos utilizar no router o mesmo path, desde que os parâmetros da requisição
// sejam diferentes (Ex.: GET e outro POST...)

const User = require('../models/user')

router.get("/", (req, res) => {
  res.send()
})
router.post("/", async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    let { name } = req.body
    console.log('Name:', name);
    let user = await User.create(name);
    console.log('User Created:', user);
    res.status(200).json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(422).json(error);
  }
})


router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`GET Id: ${req.params.id}`)
})
router.put("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`PUT Id: ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  res.send(`DELETE Id: ${req.params.id}`)
})

module.exports = router