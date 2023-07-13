import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobal } from '../Contex';

const SignUp = () => {
	const {values, setValues} = useGlobal()
	const [students, setStudents] = useState([])
	const handleAccept = (e) => {
		e.preventDefault()
		const name = e.target.id;
		const value = e.target.value;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		if(students.includes(values)){
			console.log('same details entered');
		}else{
			setStudents([...students, values])
		}
	}

	useEffect(()=>{
		console.log(students)

	},[students])

	return (
		<div className='form'>
			<form
				className='form-control'
				onSubmit={handleSubmit}>
				<h3>Report Emergency</h3>
				<section className='input'>
					<label htmlFor='firstName'>First Name:</label>
					<input
						id='firstName'
						type='text'
						placeholder='Firstname'
						required
						onChange={handleAccept}
					/>
				</section>
				<section className='input'>
					<label htmlFor='lastName'>Last Name:</label>
					<input
						id='lastName'
						type='text'
						placeholder='lastname'
						required
						onChange={handleAccept}
					/>
				</section>
				<section className='input'>
					<label htmlFor='gender'>Gender</label>
					<select
						name='gender'
						id='gender'
						onChange={handleAccept}>
						<option value=''>Gender</option>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
						<option value='other'>Other</option>
					</select>
				</section>
				<section className='input'>
					<label htmlFor='matNo'>Matriculation Number</label>
					<input
						id='matNo'
						type='text'
						required
						onChange={handleAccept}
					/>
				</section>
				<section className='input'>
					<label htmlFor='condition'>What conditions do you have :</label>
					<select
						name='condition'
						id='condition'
						onChange={handleAccept}>
						<option value='sickle-cell'>Sickle Cell</option>
						<option value='asthma'>Asthma</option>
						<option value='seizure'>Seizures</option>
						<option value='low-blood-pressure'>Low Blood Pressure</option>
						<option value='hypoglycaemia'>Hypoglycaemia</option>
						<option value='ulcer'>Ulcer</option>
					</select>
				</section>
				<section>
					<textarea
						name='report'
						id='report'
						cols='30'
						rows='10'
						placeholder=''
						onChange={handleAccept}></textarea>
				</section>
				<div>
					<NavLink to='/stdfile'>
						<button className='btn'>Submit</button>
					</NavLink>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
