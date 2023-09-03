import React from 'react';
import {useDarkMode} from "../context/DarkModeContext";
import {HiMoon, HiSun} from 'react-icons/hi';

export default function Header({filters, filter, onFilterChange}) {
	const {darkMode, toggleDarkMode} = useDarkMode();
	return (
		<header className='flex m-3 mx-aute'>
			<button className='p-1' onClick={toggleDarkMode}>
				{!darkMode && <HiMoon/>}
				{darkMode && <HiSun/>}
			</button>
			{filters.map((value, index) => (
				<div key={index}
				     className={`flex border w-[200px] justify-center cursor-pointer
				     ${filter === value ? 'bg-gray-50' : ''} border-b-2 border-b-black`}
				     onClick={() => onFilterChange(value)}>
					<p className={`text-sm font-md capitalize`}>{value}</p>
				</div>
			))}
		</header>
	);
}
