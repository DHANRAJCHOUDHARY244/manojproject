// server.js
const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(express.json())
app.use(cors())
// Create a SQLite database connection
const db = new sqlite3.Database('./balaji.db', err => {
  if (err) {
    console.error(err.message)
    throw err
  } else {
    console.log('Connected to the SQLite database.')
  }
})

// Define API routes for interacting with the database
app.get('/api/data', (req, res) => {
  db.all('SELECT * FROM balaji', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message })
      return
    }
    res.json(rows)
  })
})
app.post('/api/insertData', (req, res) => {
  const { cosignor, cosignee, balance } = req.body
  const sql = `INSERT INTO balaji (cosignor, cosignee, balance) VALUES (?, ?, ?)`

	// Execute the insert query
  db.run(sql, [cosignor, cosignee, balance], function (err) {
    if (err) {
      console.error(err.message)
      return
    }
    console.log(`A row has been inserted with rowid ${this.lastID}`)
  })
  res.json({ message: 'Data inserted successfully' })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
