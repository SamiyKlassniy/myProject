import React from 'react'
import "./registrationStyle.css";
import logo from '../../img/logo.png'

const Registration = () => {
  return (
    
    <>
    
        <div className='registrationContainer'>

            <div className="another">

                <div className='logoReg'><img src={logo}></img></div>

                    <div className='registrationBlock'>

                        <div className='regP'>
                            <p>Регистрация</p>
                        </div>

                        <div className='inputDiv'>

                            <input type="text" id="firstInput" placeholder='Email'></input>

                            <input type="text" id="secondInput" placeholder='Password'></input>

                        </div>

                        <button type="button" name='button'>Зарегистрироваться</button>



                    </div>

            </div>

        </div>

    </>

  )
}

export default Registration