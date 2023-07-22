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
	useEffect(()=>{
		setTimeout(()=>{
			sendEmail()
		}, 5000)

		setTimeout(()=>{
			navigate('/')
		}, 20000)
	}, [navigate])
	console.log(values);

	return (
		<form
			className='form'
			ref={form}>
			<h3>Your Emergency has been reported</h3>
			<div>
				<span className='details'>
					<h4>Name:</h4>
					<input defaultValue={`${firstName} ${lastName}`}></input>
				</span>
				<span className='details'>
					<h4>Email:</h4>
					<input
						defaultValue={email}
						></input>
				</span>
				<span className='details'>
					<h4>Clinic No:</h4>
					<input
						defaultValue={clinicID}
						></input>
				</span>
				<span className='details'>
					<h4>Medical condition</h4>
					<input
						defaultValue={condition}
						></input>
				</span>
			</div>
		</form>
	);
};

export default StdFile;
