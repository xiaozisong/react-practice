import store from './store'
import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)

store.subscribe(() => {
  root.render(<App></App>)
})