import React from 'react'
import Form from './Components/Form'

const App = () => {
  const heading ={
    fontSize:"55px",
    textAlign:"Center",
  }
  return (
    <>
      <h1 style={heading}>Form With Use Ref Hooks</h1>

      <Form/>
    </>
  )
}

export default App