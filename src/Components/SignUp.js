import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobal } from '../Contex';

const SignUp = () => {
	const form = useRef();

	const sendEmail = () => {

		emailjs
			.sendForm(
				'service_ldu69s5',
				'template_6zbm9j5',
				form.current,
				'CIUw0NAi1htBswg9y'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	const { values, setValues } = useGlobal();
	const [students, setStudents] = useState([]);
	const handleAccept = (e) => {
		e.preventDefault();
		const name = e.target.id;
		const value = e.target.value;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (students.includes(values)) {
			console.log('same details entered');
		} else {
			setStudents([...students, values]);
			sendEmail();
		}
	};

	return (
		<div className='form'>
			<form
				ref={form}
				className='form-control'
				onSubmit={handleSubmit}>
				<h3>Report Emergency</h3>
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
					<label htmlFor='gender'>Gender</label>
					<select
						name='gender'
						id='gender'
						onChange={handleAccept}
						required>
						<option value=''>Gender</option>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
						<option value='other'>Other</option>
					</select>
				</section>
				<section className='input'>
					<label htmlFor='matNo'>Clinic ID Number</label>
					<input
						id='matNo'
						name='matNo'
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
				<section>
					<label htmlFor="report">Report :</label>
					<textarea
						name='report'
						id='report'
						cols='30'
						rows='10'
						placeholder=''
						onChange={handleAccept}></textarea>
				</section>
				<div>
						<button className='btn' type='submit'>Submit</button>
					<NavLink to='/stdfile'>
					</NavLink>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
