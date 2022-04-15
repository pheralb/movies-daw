import express from 'express'
import morgan from 'morgan';
import routes from './routes/routes'

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(routes)

export default app;