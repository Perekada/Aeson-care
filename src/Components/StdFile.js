import React from 'react';
import { useState, useEffect } from 'react';
import { useGlobal } from '../Contex';

const StdFile = () => {
	const {values} = useGlobal()
	console.log(values);
	const {firstName, lastName, matNo, condition, report } = values

	return (
		<div className='form'>
			<h3>Your Emergency has been reported</h3>
			<div>
				<span className='details'>
					<h4>Name:</h4>
					<h4>{`${firstName} ${lastName}`}</h4>
				</span>
				<span className='details'>
					<h4>Clinic No:</h4>
					<h4>{matNo}</h4>
				</span>
				<span className='details'>
					<h4>Medical condition</h4>
					<p style={{textTransform: 'capitalize'}}>{condition}</p>
				</span>
				<span className='details'>
					<h4 style={{ fontWeight: 'bold' }}>Emergency Report</h4>
					<p>
						{report}
					</p>
				</span>
			</div>
		</div>
	);
};

export default StdFile;