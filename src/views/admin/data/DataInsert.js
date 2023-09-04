import React, { useState } from 'react'
import axios from 'axios'

function DataInsert () {
  const [formData, setFormData] = useState({
    cosignor: '',
    cosignee: '',
    balance: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
		// Make an API request to insert data
    axios
			.post('http://localhost:5000/api/insertData', formData)
			.then(response => {
  console.log(response.data)
				// Optionally, reset the form fields after successful insertion
  setFormData({
    cosignor: '',
    cosignee: '',
    balance: ''
  })
})
			.catch(error => {
  console.error(error)
})
  }

  return (
    <div className='DataInsert' style={{ paddingTop: '50px' }}>
      <h2>Insert Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cosignor:</label>
          <input type='text' name='cosignor' value={formData.cosignor} onChange={handleChange} />
        </div>
        <div>
          <label>Cosignee:</label>
          <input type='text' name='cosignee' value={formData.cosignee} onChange={handleChange} />
        </div>
        <div>
          <label>Balance:</label>
          <input type='text' name='balance' value={formData.balance} onChange={handleChange} />
        </div>
        <button type='submit'>Insert Data</button>
      </form>
    </div>
  )
}

export default DataInsert
