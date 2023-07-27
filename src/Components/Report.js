import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Report = () => {
    const form = useRef()
    const navigate = useNavigate()
    const [formError, setFormError] = useState()
    const [values, setValues] = useState({
			clinicID: '',
			report: '',
		});
     const handleAccept = (e) => {
			e.preventDefault();
			const name = e.target.id;
			const value = e.target.value;
			setValues({ ...values, [name]: value });
		};
        const sendForm = ()=>{
					emailjs
						.sendForm(
							'service_ldu69s5',
							'template_gnmwjys',
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
        }

        const handleSubmit = async (e) => {
		e.preventDefault();
		if( !values.clinicID || !values.report){
			setFormError('Please fill in all the feilds correctly')
			return
		}
        sendForm()
        setTimeout(() => {
					navigate('/');
				}, 5000);
    }
  return (
		<div className='form'>
			<form
				ref={form}
				className='form-control'
				onSubmit={handleSubmit}>
				<div>
					<h3>Report emergency for someone</h3>
				</div>
				{formError}
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
				<section className='input'>
					<label htmlFor='report'>Emergency Description:</label>
					<textarea
						name='report'
						id='report'
						cols='30'
						rows='10'
						onChange={handleAccept}
						required></textarea>
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

export default Report