console.log("MB ecommerce backend")

const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const adminApi = require('./routes/admin-api')

const MONGODB_CONNECTION_STRING = "mongodb+srv://bilguun-enkh:YxIUqiVlCDfo5PCJ@mernstackpineconedb.mwhgdhi.mongodb.net/mb-ecommerce"
const menuApi = require('./routes/menu-api')

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())
app.use('/menu', menuApi)
app.use("/admin", adminApi)

app.listen(PORT, () => {
    mongoose
        .connect(MONGODB_CONNECTION_STRING)
        .then(console.log("Database successfully connected."))
        .catch((error) => console.error(error))
    console.log(`Ecommerce backend is running on http://localhost:${PORT}`)
})