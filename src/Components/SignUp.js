import React, { useRef } from 'react';
import  supabase  from './client';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../Contex';

const SignUp = () => {
	const form = useRef();
	
	const { values, setValues } = useGlobal();
	const [formError, setFormError] = useState(null);
	const navigate = useNavigate();
	const handleAccept = (e) => {
		e.preventDefault();
		const name = e.target.id;
		const value = e.target.value;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if(!values.firstName || !values.lastName || !values.email || !values.condition || !values.clinicID){
			setFormError('Please fill in all the feilds correctly')
			return
		}
		console.log(values);
		const { data, error } = await supabase
			.from('student-data')
			.insert([{...values}])
			.select();
			if (error){
				console.log(error);
				setFormError('fill the form properly')
			}
			if (data){
				console.log(data);
				setFormError(null)
			}
		
			
			const Nav = () => {
		setTimeout(() => {
			navigate('/login');
		}, 5000);
	};
	Nav()
};
	
	return (
		<div className='form'>
			<form
				ref={form}
				className='form-control'
				onSubmit={handleSubmit}>
				<div>
					{formError}
					<h3>Sign Up</h3>
				</div>
				<section className='input'>
					<label htmlFor='firstName'>First Name:</label>
					<input
						id='firstName'
						name='firstName'
						type='text'
						placeholder='First Name'
						required
						onChange={handleAccept}
					/>
				</section>
				<section className='input'>
					<label htmlFor='lastName'>Last Name:</label>
					<input
						id='lastName'
						name='lastName'
						type='text'
						placeholder='Last Name'
						required
						onChange={handleAccept}
					/>
				</section>
				<section className='input'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						required
						onChange={handleAccept}
					/>
				</section>
				<section className='input'>
					<label htmlFor='clinicID'>Clinic ID Number</label>
					<input
						id='clinicID'
						name='clinicID'
						type='text'
						required
						onChange={handleAccept}
					/>
				</section>
				{/* <section className='input'>
					<label htmlFor='password'>Password</label>
					<input
						id='password'
						name='password'
						type='password'
						required
						onChange={handleAccept}
					/>
				</section> */}
				<section className='input'>
					<label htmlFor='condition'>What conditions do you have :</label>
					<select
						name='condition'
						id='condition'
						onChange={handleAccept}
						required>
						<option value='sickle-cell'>Sickle Cell</option>
						<option value='asthma'>Asthma</option>
						<option value='seizure'>Seizures</option>
						<option value='low-blood-pressure'>Low Blood Pressure</option>
						<option value='hypoglycaemia'>Hypoglycaemia</option>
						<option value='ulcer'>Ulcer</option>
					</select>
				</section>
				<div>
					<button
						className='btn'
						type='submit'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
