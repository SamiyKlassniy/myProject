import React from 'react'
import './adminPanelStyle.css'

const AdminPanel = () => {
  return (
    <div className='adminPanelContainer'>

        <p className='admin'>Админ-панель</p>

        <div className='buttons'>
            <button className='addTrain'>Добавить новый поезд</button>
            <button className='changeTrain'>Изменить поезд</button>
            <button className='listTrain'>Список поездов поезд</button>
            <button className='requests'>Запросы на льготы</button>
        </div>

    </div>
  )
}

export default AdminPanel