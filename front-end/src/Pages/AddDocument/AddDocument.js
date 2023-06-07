import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import './addDocumentStyle.css'

const AddDocument = () => {
  return (
    <>
    
        <NavBar/>

        <div className='AddDocumentContainer'>

            <div className='finally'>
                <p className='PageName'>Добавить льготный/проездной документ</p>

                <div className='Data'>

                    <div className='imageBlock'>
                        <p className='name'>Фото</p>
                        <input type='file'></input>
                    </div>

                    <div className='firstDateBlock'>
                        <p className='name'>Какого числа выдан</p>
                        <input type='date'></input>
                    </div>

                    <div className='secondDateBlock'>
                        <p className='name'>До какого числа действует</p>
                        <input type='date'></input>
                    </div>

                    <div className='categoryBlock'>
                        <p className='category'>Категория</p>
                        <form action="formdata" method="post" id="data"></form>
                        <p><select name="list1" form="data">
                            <option>Выберите из списка</option>
                            <option>Студенческий</option>
                            <option>Пенсионный</option>
                            <option>Ученический</option>
                            <option>Проездной</option>
                        </select></p>
                    </div>

                    <button type="button" value="Отправить" form="data">Отправить на проверку</button>

                </div>

            </div>

            
        </div>
    
    </>
  )
}

export default AddDocument