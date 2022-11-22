import React from 'react'
import WheelImg from './car.png'

const Wheel = ({numberOfWheels}) => {
  return (
    [...Array(numberOfWheels)].map((e,i) => <img src={WheelImg} alt="Wheel" style={{ width: "50px" }} key={i}/>)
    
  )
}

export default Wheel