import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Menu from '../../components/menu/Menu'
import MyTicket from '../../components/myTicket/MyTicket'
import MyTrainTicket from '../../components/myTrainTicket/MyTrainTicket'
import './myTicketsStyle.css'

const MyTickets = () => {
  return (
    <>
    
        <NavBar/>
        <Menu/>

        <div className='myTicketsContainer'>

            <p id='firstP'>Мои билеты</p>

            <MyTicket/>
            <MyTrainTicket/>

        </div>
    
    </>
  )
}

export default MyTickets