import TodoList from "./components/TodoList";
import Header from "./components/Header/Header";
import {useState} from "react";
import {DarkModeProvider} from "./components/context/DarkModeContext";

const filters = ['all', 'active', 'completed'];

function App() {
	const [filter, setFilter] = useState(filters[0]);

	return (
		<DarkModeProvider>
			<div
				className='flex items-center items-center justify-center h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 '>
				<div
					className='w-[300px] bg-gradient-to-tl from-gray-500 to-gray-200 rounded-xl shadow-2xl'>
					<h1 className='flex justify-center text-3xl font-bold m-1'>TodoList</h1>
					<Header filters={filters} filter={filter} onFilterChange={setFilter}/>
					<TodoList filter={filter}/>
				</div>
			</div>
		</DarkModeProvider>


	);
}

export default App;
