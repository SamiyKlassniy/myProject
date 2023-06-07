import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Menu from '../../components/menu/Menu'
import './myPassengersStyle.css'
import Passenger from '../../components/passenger/Passenger'

const MyPassengers = () => {
  return (
    <>
    
        <NavBar/>
        <Menu/>

        <div className='myPassengersContainer'>

            <p id='firstP'>Мои пассажиры</p>

            <Passenger/>
            <Passenger/>
            <Passenger/>

            <button type="button" className='addPassenger' name='addButton'>Добавить пассажира</button>

        </div>
    
    </>
  )
}

export default MyPassengers