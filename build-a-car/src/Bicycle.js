import React from 'react'
import Wheel from './Wheel'


const Bicycle = ({numberOfWheels}) => {
  return (
    <>
    <h1>Morning, I'm a Bicycle. I have {numberOfWheels} wheels</h1>
    <Wheel numberOfWheels={numberOfWheels} />
    </>

  )
}

export default Bicycle