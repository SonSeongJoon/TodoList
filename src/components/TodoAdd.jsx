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
		<form className='flex p-4'>
			<input className='shadow-2xl border border-gray-600 rounded-md'
			       type='text'
			       onChange={handleChange} value={text}
			       placeholder='Add Todo'
			       onKeyDown={(e) => handleSubmit}
			/>
			{/*<button onClick={handleSubmit}>추가</button>*/}
		</form>);
}
