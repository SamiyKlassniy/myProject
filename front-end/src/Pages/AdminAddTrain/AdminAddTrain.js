import React from 'react'
import './adminAddTrainStyle.css'
import AdminNavbar from '../../components/adminNavbar/AdminNavbar'

const AdminAddTrain = () => {
  return (
    <>
    
        <AdminNavbar/>

        <div className="AdminAddTrainContainer">

            <p className='intro'>Добавить поезд</p>
        <form>

            <div id='first' className="changePassengersContainerinput-container">
                <div className='login'>
                <p>Название</p>
                    <input type="text" name="last_name" placeholder="Название"></input>
                </div>

                <div id='middle' className='password'>
                    <p>Тип</p>
                    <input type="password" name="name" placeholder="Тип"></input>
                </div>

                <div className='firstName'>
                    <p>Город отправления</p>
                    <input type="text" name="father_name" placeholder="Город отправления"></input>
                </div>

                <div className='firstName'>
                    <p>Город прибытия</p>
                    <input type="text" name="father_name" placeholder="Город прибытия"></input>
                </div>

            </div>

            <div id='second' className="changePassengersContainerinput-container">
                <div className='login'>
                    <p>Время отправления</p>
                    <input type="text" name="last_name" placeholder="Время отправления"></input>
                </div>

                <div id='middle' className='password'>
                    <p>Время прибытия</p>
                    <input type="password" name="name" placeholder="Время прибытия"></input>
                </div>

                <div className='firstName'>
                    <p>Дата отправления</p>
                    <input type="text" name="father_name" placeholder="Дата отправления"></input>
                </div>

                <div className='firstName'>
                    <p>Дата прибытия</p>
                    <input type="text" name="father_name" placeholder="Дата прибытия"></input>
                </div>

            </div>

            <div className='footer'>

                <div id='third' className="changePassengersContainerinput-container">
                    <div className='firstName'>
                        <p>Кол-во вагонов</p>
                        <input type="text" name="father_name" placeholder="Кол-во вагонов"></input>
                    </div>
                </div>

            </div>

    

            <button type="submit" className='saveButton' name='saveButton' value="Отправить">Сохранить</button>

            </form>


        </div>
    
    </>
  )
}

export default AdminAddTrain