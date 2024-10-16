const express = require('express')
const cors = require('cors')
const PORT = 3000 || process.env.PORT

const app = express()
app.use(cors())

app.use(express.json())
app.listen(PORT, () => {
   console.info("Server is cooking on port", PORT);
})