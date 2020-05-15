import React, { useState } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../../store/actions';

const initForm = {
	name: '',
	age: '',
	height: ''
};

function SmurfForm({ postSmurf }) {
	const [smurfFormInput, setSmurfFormInput] = useState(initForm);

	const submitHandler = e => {
		e.preventDefault();
		postSmurf(smurfFormInput);

		setSmurfFormInput(initForm);
	};

	const changeHandler = e => {
		setSmurfFormInput({
			...smurfFormInput,
			[e.target.name]: e.target.value
		});
	};

	return (
		<form onSubmit={submitHandler} className='smurf-form'>
			<input value={smurfFormInput.name} onChange={changeHandler} type='text' name='name' placeholder='Smurf Name'/>
			<input value={smurfFormInput.age} onChange={changeHandler} type='text' name='age' placeholder='Smurf Age'/>
			<input value={smurfFormInput.height} onChange={changeHandler} type='text' name='height' placeholder='Smurf Height'/>
			<button onClick={submitHandler}>Submit</button>
		</form>
	);
}

export default connect(null, { postSmurf })(SmurfForm);
