import React, {useState} from 'react';
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";

export default function TodoList({filter}) {
	const [todos, setTodos] = useState([
		{id: 1, text: '코딩인강', status: true},
		{id: 2, text: '수학공부', status: true}]
	);
	const handleAdd = (todo) => {
		setTodos([...todos, todo])
	}
	const handleUpdate = (updated) => {
		console.log(updated)
		setTodos(todos.map(t => t.id === updated.id ? updated : t))
	}
	const handleDelete = (deleted) => {
		setTodos(todos.filter(t => t.id !== deleted.id))
	}

	const filtered = getFilteredItems(todos, filter);
	return (<div className='flex flex-col justify-center items-center'>
		<ul className='h-[300px]'>
			{filtered.map((todo) => <Todo key={todo.id}
			                              todo={todo}
			                              onUpdate={handleUpdate}
			                              onDelete={handleDelete}/>)}
		</ul>
		<TodoAdd onAdd={handleAdd}/>
	</div>);
}

function getFilteredItems(todos, filter) {
	if(filter === 'all') {
		return todos;
	} else if(filter === 'completed') {
		return todos.filter(todo => todo.status === true);
	} else {
		return todos.filter(todo => todo.status === false);
	}
}
