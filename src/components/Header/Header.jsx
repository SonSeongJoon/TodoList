import React from 'react';

export default function Header({filters, filter, onFilterChange}) {
	return (
		<header className='flex m-3 mx-aute'>
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
