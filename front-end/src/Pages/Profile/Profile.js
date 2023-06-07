import React from 'react'
import "./profileStyle.css"
import NavBar from '../../components/navbar/NavBar'
import photoProfile from '../../img/profilePhoto.png'
import ok from '../../img/ok.png'
import load from '../../img/ok.png'
import no from '../../img/ok.png'
import Menu from '../../components/menu/Menu'

const Profile = () => {
  return (
    <>

        <NavBar/>

        <Menu/>

        <div className='profileContainer'>

            <div className='photoProfile'>

                <img className='myPhoto' src={photoProfile}></img>

                <a href='#' className='changePhoto'><p>Изменить фото</p></a>


                <div className='gender'>

                    <p>Пол</p>

                    <div className='genderButtons'>

                        <button type='button' className='m'>МУЖ</button>
                        <button type='button' className='g'>ЖЕН</button>

                    </div>

                </div>


            </div>

            <div className="input-container">
                <div className='login'>
                    <p>Логин</p>
                    <input type="text" name="login" placeholder="Логин"></input>
                </div>

                <div className='password'>
                    <p>Фамилия</p>
                    <input type="password" name="last_name" placeholder="Фамилия"></input>
                </div>

                <div className='firstName'>
                    <p>Отчество</p>
                    <input type="text" name="father_name" placeholder="Отчество"></input>
                </div>

                <div className='lastName'>
                    <p>Паспорт</p>
                    <input type="text" name="passport" placeholder="Паспорт"></input>
                </div>
            </div>

            <div id='input-block-2' className="input-container">
                <div className='password'>
                    <p>Пароль</p>
                    <input type="text" name="password" placeholder="Пароль"></input>
                </div>

                <div className='name'>
                    <p>Имя</p>
                    <input type="password" name="name" placeholder="Имя"></input>
                </div>

                <div className='phone'>
                    <p>Телефон</p>
                    <input type="text" name="phone" placeholder="Телефон"></input>
                </div>

                <div className='dateofbirthday'>
                    <p>Дата рождения</p>
                    <input type="text" name="dateofbirthday" placeholder="Дата рождения"></input>
                </div>
            </div>

            <div className='documentBlock'>
                <a className='documentA' href='!#'><p className='document'>Добавить льготный/проездной
                документ</p></a>
                <img src={ok}></img>
            </div>


            <button type="button" className='saveButton' name='saveButton'>Сохранить</button>


        </div>

    </>
  )
}

export default Profile