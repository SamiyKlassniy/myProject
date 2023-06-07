import React from 'react'
import './scheduleStyle.css'
import electrichka from '../../img/electrichka.png'
import arrow from '../../img/ArrowUpper.png'
import arrowCenter from '../../img/ArrowCenter.png'

const Schedule = () => {
  return (

    <div className='myScheduleContainer'>
            <div className='upperSchedule'>
                <div className='typeOfTrain-img'><img src={electrichka}></img></div>
                <div className='typeOfTrain'>Электричка</div>
                <div className='numberOfTrain'>135Э</div>

            </div>

            <div className='centerSchedule'>

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
    </div>
    
  )
}

export default Schedule