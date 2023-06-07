import React from 'react'
import "./entryStyle.css";
import logo from '../../img/logo.png'

const Entry = () => {
    return (
    
        <>
        
            <div className='entryContainer'>
    
                <div className="another">
    
                    <div className='logoEntry'><img src={logo}></img></div>
    
                        <div className='entryBlock'>
    
                            <div className='entryP'>
                                <p id='first'>Авторизация</p>
                            </div>
    
                            <div className='inputDiv'>
    
                                <input type="text" id="firstInput" placeholder='Email'></input>
    
                                <input type="text" id="secondInput" placeholder='Password'></input>
    
                            </div>
    
                            <button type="button" name='button'>Войти</button>


                            <div className='question'>
                                <a href='#'>
                                    <p>Нет аккаунта? Загеристрируйся!</p>
                                </a>
                            </div>
    
    
                        </div>
    
                </div>
    
            </div>
    
        </>
    
      )
}

export default Entry