import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import reverseButton from '../../img/reverseButton.png'
import './scheduleStyle.css'

const Schedule = () => {
  return (
    <>
    
        <NavBar/>

        <main>

        <div className="scheduleContainer">

            <div className="another">

                <p>Расписание поездов</p>

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

        </div>

    </main>
    
    </>
  )
}

export default Schedule