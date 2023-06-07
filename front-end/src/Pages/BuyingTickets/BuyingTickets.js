import React from 'react'
import './buyingTicketsStyle.css'
import NavBar from '../../components/navbar/NavBar'
import MyTicket from '../../components/myTicket/MyTicket'
import BuyingMyTicket from '../../components/buyingMyTicket/BuyingMyTicket'
import BuyingMyTrainTicket from '../../components/buyingMyTrainTicket/BuyingMyTrainTicket'

const BuyingTickets = () => {

  return (
    <>
    
        <NavBar/>

        <div className='BuyingTicketsContainer'>

            <p className='firstP'>Оформление заказа</p>

            <BuyingMyTicket/>

            <BuyingMyTrainTicket/>

            <p className='sum'>Сумма заказа: 5430 руб.</p>

            <button className='button' type="button">Перейти к оплате</button>

        </div>
    
    </>
  )
}

export default BuyingTickets