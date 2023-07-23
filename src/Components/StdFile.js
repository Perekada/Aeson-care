import React from 'react';
import { useEffect,useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useGlobal } from '../Contex';
import { useNavigate } from 'react-router-dom';

const StdFile = () => {
	const {values} = useGlobal()
	const navigate = useNavigate()
	const {firstName, lastName, clinicID, condition, email} = values
	const form = useRef();
	const btn = useRef()
	var templateParams = {
		firstName: firstName,
		lastName: lastName,
		clinicID: clinicID,
		condition: condition,
		email: email
	}
	const sendEmail = () => {
		emailjs
			.send(
				'service_ldu69s5',
				'template_6zbm9j5',
				templateParams,
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
	const handleClick = (e) => {
		e.preventDefault()
		sendEmail()
		console.log('clicked');
		setTimeout(() => {
			navigate('/');
		}, 20000);
	}
	useEffect(()=>{
		btn.current.click()
	}, [])
	console.log(values);

	return (
		<form
			className='form'
			ref={form}>
			<h3>Your Emergency has been reported</h3>
			<div>
				<section className='input'>
					<h4>Name:</h4>
					<input defaultValue={`${firstName} ${lastName}`}></input>
				</section>
				<section className='input'>
					<h4>Email:</h4>
					<input
						defaultValue={email}
						></input>
				</section>
				<section className='input'>
					<h4>Clinic No:</h4>
					<input
						defaultValue={clinicID}
						></input>
				</section>
				<section className='input'>
					<h4>Medical condition</h4>
					<input
						defaultValue={condition}
						></input>
				</section>
				<button style={{display: 'none'}} ref={btn} onClick={handleClick} id='btn'></button>
			</div>
		</form>
	);
};

export default StdFile;
