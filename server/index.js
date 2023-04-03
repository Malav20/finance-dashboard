import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import kpiRoutes from './routes/kpi.js'
import productRoutes from './routes/product.js'
import KPI from './models/KPI.js'
import Product from './models/Product.js'
import { kpis, products } from './data/data.js'
// Congigurations

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(bodyParser.json())
app.use(morgan('common'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// Routes
app.use('/kpi', kpiRoutes)
app.use('/product', productRoutes)
// Mongoose Setup
const PORT = process.env.PORT || 9000

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(async () => {
    app.listen(PORT, () => console.log('Server listening on port ' + PORT))
    // Product.insertMany(products)
  }).catch((error) => console.log('Error: ' + error))
