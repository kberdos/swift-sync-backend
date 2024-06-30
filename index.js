const express = require("express")
const app = express()
import 'dotenv/config'

const port = process.env.PORT | 5000

app.listen(port, () => {
	console.log("listening on port", port)
})
