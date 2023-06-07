import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import './createPassengersStyle.css'

const CreatePassengers = () => {
  return (
    <>
    
        <NavBar/>

        <div className="createPassengersContainer">

            <p>Новый пассажир</p>


            <div id='first' className="createPassengersContainerinput-container">
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

            <div id='second' className="createPassengersContainerinput-container">
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


            <div className='createGender'>

                    <p>Пол</p>

                    <div className='createGenderButtons'>

                        <button type='button' className='m'>МУЖ</button>
                        <button type='button' className='g'>ЖЕН</button>

                    </div>

                </div>

    

            <button type="button" className='saveButton' name='saveButton'>Сохранить</button>


        </div>


    </>
  )
}

export default CreatePassengers