import express from 'express'
import { api } from './api'

export const app = express()
app.use(api)

if (!process.env['VITE']) { // don't listen if called by vite plugin
  app.listen(3002, () => console.log('Server started'))
}
