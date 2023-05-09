import React from 'react'
import ReactDOM from 'react-dom/client'

import AppNotes from './AppNotes'
import './index.css'

// import axios from 'axios'

// const promise = axios.get('http://localhost:3001/notes')

// promise.then(response => {
//   console.log(response)
// })

// axios.get('http://localhost:3001/notes')
//   .then(response => {
//   const notes = response.data
//   console.log(notes)
// })

ReactDOM.createRoot(document.getElementById('root')).render(<AppNotes/>)
