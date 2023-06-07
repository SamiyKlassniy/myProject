import React from 'react'
import './ticketResultStyle.css'
import reverseButton from '../../img/reverseButton.png'
import NavBar from '../../components/navbar/NavBar'
import Schedule from '../../components/schedule/Schedule'
import { ChooseMyTicket } from '../../components/chooseMyTicket/ChooseMyTicket'
import ChooseMyTrainTicket from '../../components/chooseMyTrainTicket/ChooseMyTrainTicket'

const TicketResult = () => {
  return (
    <>
    
        <NavBar/>

        <div className='TicketResultContainer'>

            <div className='another'>

                <div className="search-bar">

                    <input type="text" id="firstInput" placeholder='Куда'></input>

                    <div className="reverseButton">
                        <a href='#'><img src={reverseButton}></img></a>
                    </div>

                    <input type="text" id="secondInput" placeholder='Откуда'></input>
                    <input type="date" name="dob" id="lastInput" data-placeholder="Дата" required aria-required="true"></input>

                    <button type="button" name='button'>Найти</button>

                </div>
            </div>

        <ChooseMyTicket/>
        <ChooseMyTrainTicket/>

        <p className='sum'>Сумма заказа: 5430 руб.</p>

        </div>

    </>
  )
}

export default TicketResult