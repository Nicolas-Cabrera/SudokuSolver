import React, { useState } from 'react';
import './NumbersInput.css';

export default function NumbersInput() {

	const [nums, setNums] = useState([]);
	
	function handleChange(e, index) {
		const value = e.target.value
		const newItem = value + index;
		if(newItem === '') {
			setNums([...nums, 0]);
		} else {
			setNums([...nums, newItem]);
		} 
		console.log(nums);

		// if(nums.length === 9) {
		// 	let finalArray = [];
		// 	for(let i = 0; i < nums.length; i +=3) {
		// 		finalArray.push(nums.slice(i, 3 + i));
		// 	}
		// 	console.log(finalArray);
		// }
	}

	return (
		<div>
			<h1>Enter numbers</h1>
				<form className='width-size'>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 1)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 2)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 3)}></input>
				</form>
				<form className='width-size'>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 4)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 5)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 6)}></input>
				</form>
				<form className='width-size'>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 7)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 8)}></input>
					<input type='text' maxLength='1' onChange={(e) => handleChange(e, 9)}></input>
				</form>
				<label>{nums}</label>
			<h2></h2>
			<div>
			</div>

		</div>
	);
}