import React, { useState } from 'react';
import { connect } from 'react-redux';

import { putSmurf } from '../../store/actions';

const initForm = {
	id: '',
	editTarget: '',
	editInput: ''
};

function EditSmurfForm({ putSmurf }) {
	const [editSmurfFormInput, setEditSmurfFormInput] = useState(initForm);

	const submitHandler = e => {
		e.preventDefault();
		putSmurf(editSmurfFormInput);

		setEditSmurfFormInput(initForm);
	};

	const changeHandler = e => {
		setEditSmurfFormInput({
			...editSmurfFormInput,
			[e.target.name]: e.target.value
		});
	};

	return (
		<form onSubmit={submitHandler} className='edit-smurf-form'>
			<h3>Edit Smurf</h3>
			<input value={editSmurfFormInput.id} onChange={changeHandler} type='text' name='id' placeholder='ID'/>
			<input value={editSmurfFormInput.editTarget} onChange={changeHandler} type='text' name='editTarget' placeholder='Edit Field'/>
			<input value={editSmurfFormInput.editInput} onChange={changeHandler} type='text' name='editInput' placeholder='Target Field Change'/>
			<button onClick={submitHandler}>Submit</button>
		</form>
	);
}

export default connect(null, { putSmurf })(EditSmurfForm);
