import express, { Express, Request, Response } from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3000

// proxy
app.use(
  '/search',
  createProxyMiddleware({
    target: 'https://itunes.apple.com',
    changeOrigin: true,
  })
)

app.use(express.static(path.join(__dirname, '../../', 'build')))

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../', 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
