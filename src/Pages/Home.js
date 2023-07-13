import React from 'react'
import { NavLink } from 'react-router-dom'
import sos from '../sosLogo.png'
const Home = () => {
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
					{/* <button className='btn'>
                <NavLink to='/login'>
                    Report
                </NavLink>
            </button>
            <button className='btn'>
                <NavLink to='/signup'>
                    Register new students
                </NavLink>
            </button> */}

					<NavLink to='/signup'>
						<button className='sos'>
						<img src={sos} alt="SOS" />
						</button>
					</NavLink>
				</div>
			</div>
		);
}

export default Home