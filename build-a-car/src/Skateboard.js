import React from 'react'
import Wheel from './Wheel'


const Skateboard = ({numberOfWheels}) => {
  return (
    <>
    <h1>Hey, I'm a Skateboard. I have {numberOfWheels} wheels</h1>
    <Wheel numberOfWheels={numberOfWheels} />
    </>

  )
}

export default Skateboard