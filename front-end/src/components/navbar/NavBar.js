import React from 'react'
import logo from '../../img/logo.png'
import avatar from '../../img/avatar.png'
import away from '../../img/away.png'

import './style.css'

const NavBar = () => {
	return (
		<header>
			
				<div>
				<a className="logo-href" href="#"><img className="logo" src={logo} alt='logo'></img></a>
				</div>

				<nav className="navbar">
					<ul>
						<li><a className = "charmenu" href="#">Пассажирам</a></li>
						<li><a className = "charmenu" href="#">Расписание</a></li>
					</ul>
				</nav>

				<div>
						<a className="avatar-href" href="#1"><img className="avatar" src={avatar} alt='avatar'></img></a>
				</div>

				<div>
						<a className="away-href" href="#11"><img className="away" src={away} alt='away'></img></a>
				</div>

				

		</header>
	)
}

export default NavBar