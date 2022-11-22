import React from 'react'
import Wheel from './Wheel'

const Truck = ({numberOfWheels}) => {
  return (
    <>
    <h1>Hey there, I'm a Truck. I have {numberOfWheels} wheels</h1>
    <Wheel numberOfWheels={numberOfWheels} />

    </>
  )
}

export default Truck