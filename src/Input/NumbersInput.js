import React, { useState } from 'react';
import './NumbersInput.css';

export default function NumbersInput() {

	const [nums, setNums] = useState([]);

	function handleChange(e, index) {
		if(index === 0) {
			let first = e.target.value;
		} else if(index === 1) {
			let second = e.target.value;
		} else {
			let third = e.target.value;
		}
		//let arr = [first, second, third];
	}

	return (
		<div>
			<h1>Enter numbers</h1>
				<form className='width-size'>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 0)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 1)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 2)}></input>
				</form>
				<form className='width-size'>
					<input type='text' maxLength='1'></input>
					<input type='text' maxLength='1'></input>
					<input type='text' maxLength='1'></input>
				</form>
				<form className='width-size'>
					<input type='text' maxLength='1'></input>
					<input type='text' maxLength='1'></input>
					<input type='text' maxLength='1'></input>
				</form>
			<h2></h2>
			<div>
			</div>

		</div>
	);
}