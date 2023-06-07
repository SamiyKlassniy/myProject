import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import './changePassengersStyle.css'
import ok from '../../img/ok.png'
import load from '../../img/load.png'
import no from '../../img/no.png'

const ChangePassengers = () => {
  return (
    <>
    
        <NavBar/>

        <div className="changePassengersContainer">

            <p className='intro'>Изменить пассажира</p>


            <div id='first' className="changePassengersContainerinput-container">
                <div className='login'>
                    <p>Фамилия</p>
                    <input type="text" name="last_name" placeholder="Фамилия"></input>
                </div>

                <div id='middle' className='password'>
                    <p>Имя</p>
                    <input type="password" name="name" placeholder="Имя"></input>
                </div>

                <div className='firstName'>
                    <p>Отчество</p>
                    <input type="text" name="father_name" placeholder="Отчество"></input>
                </div>

            </div>

            <div id='second' className="changePassengersContainerinput-container">
                <div className='login'>
                    <p>Фамилия</p>
                    <input type="text" name="last_name" placeholder="Фамилия"></input>
                </div>

                <div id='middle' className='password'>
                    <p>Имя</p>
                    <input type="password" name="name" placeholder="Имя"></input>
                </div>

                <div className='firstName'>
                    <p>Отчество</p>
                    <input type="text" name="father_name" placeholder="Отчество"></input>
                </div>

            </div>

            <div className='footer'>

                <div className='documentBlock'>
                    <a className='documentA' href='!#'><p className='document'>Добавить льготный/проездной
                    документ</p></a>
                    <img src={no}></img>
                </div>

                <div className='changeGender'>

                        <p>Пол</p>

                        <div className='changeGenderButtons'>

                            <button type='button' className='m'>МУЖ</button>
                            <button type='button' className='g'>ЖЕН</button>

                        </div>

                </div>

            </div>

    

            <button type="button" className='saveButton' name='saveButton'>Сохранить</button>


        </div>


    </>
  )
}

export default ChangePassengers