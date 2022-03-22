import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Button from './Button/Button'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Button size='small'>Button</Button>
    <Button size='default'>Button</Button>
    <Button size='large'>Button</Button>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
