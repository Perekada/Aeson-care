import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SendEmail = () => {
	 const form = useRef()
	 const navigate = useNavigate();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [clinicID, setClinicID] = useState();
	const [report, setReport] = useState()

	var templateParams = {
		name: name,
		clinicID: clinicID,
		email: email,
		report: report,
	};
	const send = () =>{

		emailjs
			.send(
				'service_ldu69s5',
				'template_gnmwjys',
				templateParams,
				'CIUw0NAi1htBswg9y'
			)
			.then(
				function (response) {
					console.log('SUCCESS!', response.status, response.text);
				},
				function (error) {
					console.log('FAILED...', error);
				}
			);
	}
  const handleAccept = (e) =>{
    e.preventDefault()
	send()
	setTimeout(() => {
		navigate('/');
	}, 5000);
  }
  return (
		<div className='form'>
			<form className='form-control' onSubmit={handleAccept} ref={form}>
				<div>
					<h3>Send Message</h3>
				</div>
				<section className='input'>
					<label htmlFor='name'>Name:</label>
					<input
						id='name'
						name='name'
						type='text'
						placeholder='First Name'
						required
						onChange={(e) => setName(e.target.value)}
					/>
				</section>
				<section className='input'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</section>
				<section className='input'>
					<label htmlFor='clinicID'>Clinic ID Number</label>
					<input
						id='clinicID'
						name='clinicID'
						type='text'
						required
						onChange={(e) => setClinicID(e.target.value)}
					/>
				</section>
				<section className='input'>
					<textarea
						name='report'
						id='report'
						cols='30'
						rows='10'
						onChange={(e)=> setReport(e.target.value)}></textarea>
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
}

export default SendEmail