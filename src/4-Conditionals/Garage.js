import React from 'react'

const Garage = (props) => {
    const cars=props.cars
  return (
    <div>
        <h1>Garage</h1>
        {cars.lenght>0 && <h2>You have a {cars.lenght} cars in your garage</h2>}
        
    </div>
  )
}

export default Garage