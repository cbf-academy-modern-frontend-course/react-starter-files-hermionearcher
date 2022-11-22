import React from 'react'
import Wheel from './Wheel'

const Bus = ({numberOfWheels}) => {
  return (
    <>
    <h1>Hello, I am a Bus. I have {numberOfWheels} wheels</h1>
    <Wheel numberOfWheels={numberOfWheels} />
    </>

  )
}

export default Bus