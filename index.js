import express from 'express'
const app = express()
import 'dotenv/config'
import { registerRoute } from './api/utils.js'
import { PostClientTest } from './api/metadata.js'
import { handlePostTest } from './routes/clientRoutes.js'

app.use(express.json())
const port = process.env.PORT

registerRoute(app, PostClientTest, async (req, res) => {
	const { uid } = req.body
	console.log(uid)
	const responseBody = await handlePostTest({ uid })
	res.send({ code: 1, body: responseBody })
})

app.listen(port, () => {
	console.log("listening on port", port)
})

