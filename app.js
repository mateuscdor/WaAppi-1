import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './routes.js'
import { init, cleanup } from './whatsapp.js'

const app = express()
// const host = process.env.HOST ?? '127.0.0.1'
const port = parseInt(process.env.PORT ?? 3757)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
    init()
    console.log(`Server is listening`)
})

nodeCleanup(cleanup)

export default app
