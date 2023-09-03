import React, {useState} from 'react';

export default function TodoAdd({onAdd}) {
	const [text, setText] = useState('');
	const handleChange = (e) => {
		setText(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if(text.trim().length === 0) {
			return;
		}
		onAdd({id: new Date().getTime(), text, status: false});
		setText('');
	}
	return (
		<form className='flex p-4 bg-gray-300 w-full items-center justify-center'>
			<input className='shadow-2xl rounded-l-md p-1'
			       type='text'
			       onChange={handleChange} value={text}
			       placeholder='Add Todo'
			/>
			<button className='border rounded-r-md text-md text-white p-1 bg-gray-500' onClick={handleSubmit}>추가
			</button>
		</form>
	);
}
