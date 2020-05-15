import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../../store/actions';

const initForm = {
	name: '',
	age: '',
	height: ''
};

function NewSmurfForm({ postSmurf }) {
	const [newSmurfFormInput, setNewSmurfFormInput] = useState(initForm);

	const submitHandler = e => {
		e.preventDefault();
		postSmurf(newSmurfFormInput);

		setNewSmurfFormInput(initForm);
	};

	const changeHandler = e => {
		setNewSmurfFormInput({
			...newSmurfFormInput,
			[e.target.name]: e.target.value
		});
	};

	return (
		<form onSubmit={submitHandler} className='new-smurf-form'>
			<h3>New Smurf</h3>
			<input value={newSmurfFormInput.name} onChange={changeHandler} type='text' name='name' placeholder='Smurf Name'/>
			<input value={newSmurfFormInput.age} onChange={changeHandler} type='text' name='age' placeholder='Smurf Age'/>
			<input value={newSmurfFormInput.height} onChange={changeHandler} type='text' name='height' placeholder='Smurf Height'/>
			<button onClick={submitHandler}>Submit</button>
		</form>
	);
}

export default connect(null, { postSmurf })(NewSmurfForm);
