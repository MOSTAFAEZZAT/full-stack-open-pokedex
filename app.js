import express from 'express'
const app = express()
import 'dotenv/config'

// Ensure process.env is defined or provide a fallback
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
