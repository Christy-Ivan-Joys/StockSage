import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'


const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
console.log(port)

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
