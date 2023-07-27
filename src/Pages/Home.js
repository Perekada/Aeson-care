import React, { useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import sos from '../sosLogo.png'
import {useNavigate} from 'react-router-dom'
import { useGlobal } from '../Contex';
const Home = () => {
	const { values, loggedIn} = useGlobal();
	const navigate =useNavigate()
	
	

	useEffect (()=>{
		if (loggedIn === false){
			navigate('/signup')
		}
	}, [loggedIn, navigate])
	console.log(values);
    return (
			<div className='Home'>
				<div className='container'>
					<section className='welcome'>
						<h2>Welcome to Aeson Care</h2>
						<h3>
							An emergency response system designed to connect you to a health
							care response team at the tap of the button
						</h3>
					</section>
					<section>
						<h3>Experiencing an Emergency ? <br />
						 Tap the button</h3>
					<NavLink to='/stdfile'>
						<button className='sos'>
						<img src={sos} alt="SOS" />
						</button>
					</NavLink>
					</section>
				</div>
			</div>
		);
}

export default Home