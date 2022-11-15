import React from 'react'
import PetForm from './PetForm'

const Home = () => {
  return (
    <>
          <h1>All Pets</h1>
          <section>This is the page for all your pet needs</section>
          <img src="imgs/kitten.jpg" alt="Kitten"/>
          <img src="imgs/puppy.jpg" alt="Puppy"/>
          <img src="imgs/duckling.jpg" alt="Duckling"/>
          {/* <PetForm /> */}
        </>
  )
}

export default Home