import React from 'react';
import StdFile from './StdFile';

const Login = (props) => {

	const handleSubmit = (e) => {
		e.preventDefault()

		return<StdFile/>
	}

	return (
		<form
			className='login' onSubmit={handleSubmit}>
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
					name='MatNo'
					id='MatNo'
					placeholder='Matriculation No'
				/>
			</section>
			<section>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='Password'
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
