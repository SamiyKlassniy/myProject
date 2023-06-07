import React from 'react'
import './adminDocumentListStyle.css'
import AdminNavbar from '../../components/adminNavbar/AdminNavbar'

const AdminDocumentList = () => {
  return (
    <>
    
    <AdminNavbar/>

    <div className="AdminChangePassengersContainer">

      <p className='intro'>Запросы на льготы</p>

      <div className='trainList'>

        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>user-id</th>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Паспорт</th>
              <th>Дата рождения</th>
              <th>Пол</th>
              <th>Выдан</th>
              <th>Действителен до</th>
              <th>Категория</th>
              <th>Фото</th>
              <th>Решение</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>Кишко</td>
              <td>Дмитрий</td>
              <td>Петрович</td>
              <td>6317 397341</td>
              <td>20.06.2003</td>
              <td>муж</td>
              <td>14.05.2023</td>
              <td>01.06.2023</td>
              <td>Студенческий</td>
              <td>img</td>
              <td>
                <a href='#'>принять</a>
                <a href='#'>отказать</a>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>

    </>
  )
}

export default AdminDocumentList