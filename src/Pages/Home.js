import React, {useState, useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'
import sos from '../sosLogo.png'
import emailjs from '@emailjs/browser'
import supabase from '../Components/client';
import {useNavigate} from 'react-router-dom'
import { useGlobal } from '../Contex';
const Home = () => {
	const [error, setError] = useState(null)
	const [students, setStudents] = useState(null)
	const { values, setValues, loggedIn} = useGlobal();
	const navigate =useNavigate()
	
	

	useEffect (()=>{

		// const fetchStudents = async () => {
		// 	const {data, error} = await supabase
		// 	.from('student-data')
		// 	.select()

		// 	if (error){setError('Could not fetch')
		// 	setStudents(null)
		// 	console.log(error)
		// }
		// if (data){
		// 	setStudents(data)
		// 	setError(null)
		// }
		// }
		// fetchStudents()
		// const student = window.localStorage.getItem('student')
		// setValues(student)
		if (loggedIn === false){
			navigate('/signup')
		}
	}, [loggedIn])
	console.log(values);
	// console.log(loggedIn);
	// emailjs.sendForm()
    return (
			<div className='Home'>
				<div className='container'>
					<section className='welcome'>
						<h2>Welcome to Aeson Care</h2>
						<h3>
							An emergency response system designed to connect you to a health
							care response team at the tap of the button
						</h3>
						{students && (
							<div> {students.map(student =>(
								<p>{student.firstName}</p>
							))}</div>
						)}
					</section>
					<NavLink to='/stdfile'>
						<button className='sos'>
						<img src={sos} alt="SOS" />
						</button>
					</NavLink>
				</div>
			</div>
		);
}

export default Home