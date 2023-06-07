import React from 'react'
import './trainListStyle.css'
import AdminNavbar from '../../components/adminNavbar/AdminNavbar'

const TrainList = () => {
  return (
    <>
    
    <AdminNavbar/>

    <div className="AdminChangePassengersContainer">

      <p className='intro'>Список поездов</p>

      <div className='trainList'>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>название</th>
              <th>тип</th>
              <th>станция отправления</th>
              <th>станция прибытия</th>
              <th>время отправления</th>
              <th>время прибытия</th>
              <th>дата отправления</th>
              <th>дата прибытия</th>
              <th>кол-во вагонов</th>
              <th>решение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>506Ж</td>
              <td>Электричка</td>
              <td>Зуборезный</td>
              <td>Карамыш</td>
              <td>18:32</td>
              <td>20:32</td>
              <td>20.06.2023</td>
              <td>20.06.2023</td>
              <td>8</td>
              <td>
                <a href='#'>изменить</a>
                <a href='#'>удалить</a>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

      <button className='addTrain'>Добавить поезд</button>

    </div>
    
    </>
  )
}

export default TrainList