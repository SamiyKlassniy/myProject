import React from 'react'
import "./menuStyle.css"

const Menu = () => {
  return (
    <>

<div className='menuContainer'>
    
    <nav className="menu">
                <ul>
                    <li>
                      <a className="charmenu1" href="#">
                          <div className="li">
                              <div id='p1' className="dashboard">
                                  <p>Мой профиль</p>
                              </div>
                       </div>
                      </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a className="charmenu1" href="#">
                            <div className="li">
                               <div className="allcoursesimg">
                                   <p>Мои билеты</p>
                               </div>
                               <div className="block">
                                   
                               </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a className="charmenu1" href="#">
                            <div className="li">
                                <div className="resoursesimg">
                                   <p>Мои пассажиры</p>
                               </div>
                            </div>
                        </a>
                    </li>
                </ul>
            
            </nav>

</div>
    
    </>
  )
}

export default Menu