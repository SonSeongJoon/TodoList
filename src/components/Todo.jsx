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
		<li className='flex items-center m-1 justify-between w-full'>
			<div>
				<input
					className='mr-1 relative peer shrink-0 appearance-none w-4 h-4 border-2 border-gray-500 rounded-sm bg-white mt-1 checked:bg-gray-800 checked:border-0 dark:bg-gray-600 dark:border-gray-600 dark:checked:bg-gray-700 dark:checked:border-0'
					type='checkbox'
					id={id}
					onClick={onUpdate}
					checked={status === true}
					onChange={handleChecked}
				/>
				<label key={id} htmlFor={id}>{text}</label>
			</div>
			<button className='ml-2 border-black border rounded-md p-0.5' onClick={handleDelete}>삭제</button>
		</li>

	);
}
