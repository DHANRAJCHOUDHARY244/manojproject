import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Data () {
  const [data, setData] = useState([])

  useEffect(() => {
		// Make an API request to fetch data from the server
    axios
			.get('http://localhost:5000/api/data')
			.then(response => {
  console.log(response.data)
  setData(response.data)
})
			.catch(error => {
  console.error(error)
})
  }, [])

  return (
    <div className='Data'>
      <h1>SQLite Data</h1>
      <ul>
        {data.map((item, index) =>
          <li key={index}>
            <strong>Cosignor:</strong> {item.cosignor}, <strong>Cosignee:</strong> {item.cosignee},{' '}
            <strong>Balance:</strong> {item.balance}
          </li>
				)}
      </ul>
    </div>
  )
}

export default Data
