import React from 'react'
import Wheel from './Wheel'

const Car = ({numberOfWheels}) => {
  console.log(typeof numberOfWheels)
  return (
    <>
    <h1>Hi, I am a car! I have {numberOfWheels} wheels</h1>
    <Wheel numberOfWheels={numberOfWheels} />
    </>
  )
}

export default Car