import React from 'react';

export default function Todo({todo, onUpdate, onDelete}) {
	const {id, text, status} = todo;
	const handleDelete = () => {
		onDelete(todo)
	}
	const handleChecked = (e) => {
		const status = !!e.target.checked;
		onUpdate({...todo, status: status})
	}
	return (
		<li className='flex items-center m-1'>
			<input type='checkbox' onClick={onUpdate} checked={status === true} onChange={handleChecked}/>
			<label key={id} htmlFor='checkbox'>{text}</label>
			<button className='ml-2 border-black border rounded-md p-0.5' onClick={handleDelete}>삭제</button>
		</li>

	);
}
