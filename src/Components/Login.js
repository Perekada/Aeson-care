import React from 'react';
import StdFile from './StdFile'
import { useNavigate } from 'react-router-dom';
import supabase from './client';
import { useState } from 'react';
import { useEffect } from 'react';
import { useGlobal } from '../Contex';


const Login = (props) => {
	const [clinicID, setClinicID] = useState('')
	const navigate = useNavigate();
	const { values, setValues, loggedIn, setLoggedIn } = useGlobal();

	const handleSubmit = async (e) => {
		e.preventDefault()
		let {data, error} = await supabase
		.from('student-data')
		.select()
		.eq('clinicID',clinicID)
		
		if(error) {
			alert(error)
			navigate('/signup')
		}
		if (data){
			setLoggedIn(true)
			setValues(...data)
		}
		window.localStorage.setItem('student', JSON.stringify(...data));
		window.localStorage.setItem('loggedIn', true)
		return navigate('/')
	}
	useEffect(()=>{

	},[])

	return (
		<form
			className='login'
			onSubmit={handleSubmit}>
			<div>
				<h3>Sign In</h3>
			</div>
			<section>
				<input
					type='text'
					name='firstName'
					id='firstName'
					placeholder='firstName'
				/>
			</section>
			<section>
				<input
					type='text'
					name='email'
					id='email'
					placeholder='Email'
				/>
			</section>
			<section>
				<input
					type='text'
					name='clinicID'
					id='clinicID'
					placeholder='Clinic ID'
					onChange={(e) => setClinicID(e.target.value)}
				/>
			</section>
			<button
				type='submit'
				className='btn'>
				Login
			</button>
		</form>
	);
};

export default Login;
