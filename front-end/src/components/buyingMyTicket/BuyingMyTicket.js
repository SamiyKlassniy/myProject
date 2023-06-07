import React, { useState } from 'react'
import './buyingMyTicketStyle.css'
import electrichka from '../../img/electrichka.png'
import arrow from '../../img/ArrowUpper.png'
import arrowCenter from '../../img/ArrowCenter.png'
import line from '../../img/Line.png'
import plus from '../../img/plus.png'

const BuyingMyTicket = () => {

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(152);

  const handleAdd = () => {
    // увеличиваем количество товара и пересчитываем сумму покупки
    setQuantity(quantity + 1);
    setTotal(total + 152);
  };

  const handleRemove = () => {
    // уменьшаем количество товара и пересчитываем сумму покупки
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotal(total - 152);
    }
  };

  return (
    <div className='BuyingMyTicketContainer'>

        <div className='left'>
            <div className='upper'>
                <div className='typeOfTrain-img'><img src={electrichka}></img></div>
                <div className='typeOfTrain'>Электричка</div>
                <div className='numberOfTrain'>135Э</div>

                <div className='date'>

                  <p className='firstDate'>20.06.2023</p>
                  <img className='strelka' src={arrow}></img>
                  <p className='secondDate'>20.06.2023</p>

                </div>

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
              <p className='IdOfTicket'>242</p>
            </div>

        </div>

        <div className='right'>

          <img className='line' src={line}></img>

          <div className='info'>

            <div className='infoAboutTicket'>
              <p className='typeOfTicket'>Билет</p>
              <p className='price'>152 руб.</p>
            </div>

            <div className='amountBlock'>
                <p className='amount'>{quantity}</p>
                <button onClick={handleAdd} className='plusButton' type='button'><img className='plus' src={plus}></img></button>
            </div>

          </div>

        </div>
        

    </div>
  )
}

export default BuyingMyTicket