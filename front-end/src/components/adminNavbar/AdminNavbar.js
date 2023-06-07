import React from 'react'
import './adminNavbarStyle.css'
import logo from '../../img/adminLogo.png'

const AdminNavbar = () => {
  return (
    <>
        <header className='header'>
                
            <div>
            <a className="logo-href" href="#"><img className="logo" src={logo} alt='logo'></img></a>
            </div>

        </header>

    </>
  )
}

export default AdminNavbar