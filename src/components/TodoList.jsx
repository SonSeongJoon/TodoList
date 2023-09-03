import React, {useEffect, useState} from 'react';
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";

export default function TodoList({filter}) {
	const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	})
	const handleAdd = (todo) => {
		setTodos([...todos, todo])
	}
	const handleUpdate = (updated) => {
		setTodos(todos.map(t => t.id === updated.id ? updated : t))
	}
	const handleDelete = (deleted) => {
		setTodos(todos.filter(t => t.id !== deleted.id))
	}

	const filtered = getFilteredItems(todos, filter);
	return (<div className='flex flex-col justify-center items-center dark:bg-teal-950 dark:text-white'>
		<ul className='h-[300px] w-full px-10'>
			{filtered.map((todo) => <Todo key={todo.id}
			                              todo={todo}
			                              onUpdate={handleUpdate}
			                              onDelete={handleDelete}/>)}
		</ul>
		<TodoAdd onAdd={handleAdd}/>
	</div>);
}

function readTodosFromLocalStorage() {
	const todos = localStorage.getItem('todos');
	return todos ? JSON.parse(todos) : [];
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
