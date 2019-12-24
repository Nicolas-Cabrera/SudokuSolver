import React, { useState } from 'react';
import './NumbersInput.css';

export default function NumbersInput() {

	const [nums, setNums] = useState([]);

	return (
		<div>
			<h1>Enter numbers</h1>
			<form className='width-size'>
				<input type='number' onChange={(e) => setNums(e.target.value)}></input>
				<input type='number'></input>
				<input type='number'></input>
			</form>
			<form className='width-size'>
				<input type='number'></input>
				<input type='number'></input>
				<input type='number'></input>
			</form>
			<form className='width-size'>
				<input type='number'></input>
				<input type='number'></input>
				<input type='number'></input>
			</form>

			<div>
				<h3>{nums}</h3>
			</div>

		</div>
	);
}