import React, { useState } from 'react';
import './NumbersInput.css';

export default function NumbersInput() {

	const [nums1, setNums1] = useState([]);
	
	function handleChange(e) {
		const newItem = e.target.value;
		if(newItem === '') {
			return null;
		} else {
			setNums1([...nums1, +newItem]);
		} 

		if(nums1.length === 8) {
			console.log('Array is full');
		}
	}

	return (
		<div>
			<h1>Enter numbers</h1>
				<form className='width-size'>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e)}></input>
				</form>
				<form className='width-size'>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e)}></input>
				</form>
				<form className='width-size'>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e)}></input>
				</form>
				<label>{nums1}</label>
			<h2></h2>
			<div>
			</div>

		</div>
	);
}