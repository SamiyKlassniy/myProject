import React from 'react'
import './purchaseStyle.css'
import NavBar from '../../components/navbar/NavBar'

const Purchase = () => {
  return (
    <>
    
        <NavBar/>


        <div className='purchaseContainer'>

            <p className='error'>Произошла ошибка</p>

            <button className='goToMainButton'>Перейти на главную</button>

        </div>
    
    </>
  )
}

export default Purchase