import React from 'react'
import './buyingMyTrainTicketStyle.css'
import electrichka from '../../img/train.png'
import arrow from '../../img/ArrowUpper.png'
import arrowCenter from '../../img/ArrowCenter.png'
import line from '../../img/Line.png'
import printer from '../../img/Printer.png'

const BuyingMyTrainTicket = () => {
  return (
    <div className='BuyingMyTrainTicketContainer'>

        <div className='left'>
            <div className='upper'>
                <div className='typeOfTrain-img'><img src={electrichka}></img></div>
                <div className='typeOfTrain'>VIP</div>
                <div className='numberOfTrain'>506Ж</div>

                <div className='date'>

                  <p className='firstDate'>20.06.2023</p>
                  <img className='strelka' src={arrow}></img>
                  <p className='secondDate'>20.06.2023</p>

                </div>

            </div>

            <div className='center'>

              <div className='firstTime'>
                <p className='Time'>00:20</p>
                <p className='fisrtPlace'>Саратов 1 Пасс</p>
              </div>

              <div className='groupOfCenter'>
                <img className='strelkaCenter' src={arrowCenter}></img>
                <p className='fullTime'>8 ч 33 мин</p>
              </div>

              <div className='secondTime'>
                <p className='Time'>08:53</p>
                <p className='secondPlace'>Москва Павелецкая</p>
              </div>

            </div>

            <div className='footer'>
              <p className='IdOfTicket'>243</p>
            </div>

        </div>

        <div className='right'>

          <img className='line' src={line}></img>

          <div className='info'>

            <div className='infoAboutTicket'>
              <p className='typeOfTicket'>Билет</p>
              <p className='price'>2140 руб.</p>
            </div>

            <div className='infoAboutPlace'>
              <p className='numberOfPlaceInTrain'>Вагон №3</p>
              <p className='numberOfPlace'>Место №17</p>
            </div>

            <form action="formdata" method="post" id="data"></form>
                        <p className='passenger'><select name="list1" form="data">
                            <option>Выберать пассажира</option>
                            <option>Кишко Дмитрий Петрович</option>
                            <option>Свинарев Егор Антонович</option>
                            <option>Штырев Олег Игоревич</option>
                        </select></p>

          </div>

        </div>
        

    </div>

  )
}

export default BuyingMyTrainTicket