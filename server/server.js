import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import foodRoutes from './routes/foodRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/foods', foodRoutes)

connectDB()

const PORT = process.env.PORT || 5000

app.get('/api/health', (req, res) => {
  res.json({
    message: 'Nutrition Tracker API is running',
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})