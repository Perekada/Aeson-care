import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../logo.png'
import { FaBars } from 'react-icons/fa';
import { useState, useEffect} from 'react';

const Navbar = () => {
	  const [show, setShow] = useState(false);
	  const [style, setStyle] = useState('')

	  const handleClick = () =>{ 
		  setShow(!show)

	}
	useEffect(()=>{
		if (show) {
			setStyle('links visible');
		} else {
			setStyle('links');
		}
	}, [show])
	  
  return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<NavLink to='/'>
						<img
							src={logo}
							alt='logo'
							className='logo'
						/>
					</NavLink>
				</div>
				<div className='toggle'>
					<button
						className='nav-toggle'
						onClick={handleClick}>
						<FaBars/>
					</button>
					<ul className={style}>
						<li>
							<NavLink
								to='/report'
								onClick={() => setShow(false)}>
								Report an Emergency
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/sendemail'
								onClick={() => setShow(false)}>
								Cosultation
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar