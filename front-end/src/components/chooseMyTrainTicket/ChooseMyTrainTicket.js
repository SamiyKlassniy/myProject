import React from 'react'
import './chooseMyTrainTicketStyle.css'
import electrichka from '../../img/train.png'
import arrow from '../../img/ArrowUpper.png'
import arrowCenter from '../../img/ArrowCenter.png'
import line from '../../img/Line.png'
import printer from '../../img/Printer.png'

const ChooseMyTrainTicket = () => {
  return (
    <div className='ChooseMyTicketContainer'>

        <div className='left'>
            <div className='upper'>
                <div className='typeOfTrain-img'><img src={electrichka}></img></div>
                <div className='typeOfTrain'>VIP</div>
                <div className='numberOfTrain'>506Ж</div>

            </div>

            <div className='center'>

            <div className='firstTime'>
                <p className='Time'>18:32</p>
                <p className='fisrtPlace'>Зуборезный</p>
            </div>

            <div className='groupOfCenter'>
                <img className='strelkaCenter' src={arrowCenter}></img>
                <p className='fullTime'>1 ч 58 мин</p>
            </div>

            <div className='secondTime'>
                <p className='Time'>20:30</p>
                <p className='secondPlace'>Карамыш</p>
            </div>

            </div>

            <div className='footer'>
            <p className='IdOfTicket'>241</p>
            </div>

        </div>

        <div className='right'>

        <img className='line' src={line}></img>

        <div className='info'>

            <div className='infoAboutTicket'>
            <p className='typeOfTicket'>Билет</p>
            <p className='price'>2140 руб.</p>
            </div>

        </div>

        </div>


    </div>
  )
}

export default ChooseMyTrainTicket