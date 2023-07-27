import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Report = () => {
    const form = useRef()
    const navigate = useNavigate()
    const [formError, setFormError] = useState()
    const [values, setValues] = useState({
			firstName: '',
			lastName: '',
			email: '',
			clinicID: '',
			condition: '',
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
        }

        const handleSubmit = async (e) => {
		e.preventDefault();
		if(!values.firstName || !values.lastName || !values.email || !values.condition || !values.clinicID){
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
					<h3>
                        Report emergency for someone
                    </h3>
				</div>
                {formError}
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
						<option value='none'>None of the Above</option>
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
}

export default Report