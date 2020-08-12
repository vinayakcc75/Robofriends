import React from 'react';

const SearchBox =({searchChange,searchfield})=>{
	return(
			<div className='pa2 '>
				<input  className='pa3 ba b--green bg-lightest-blue' 
				type="text" 
				placeholder="Search Robots" 			
				onChange={searchChange}
				/>
			</div>

		);
}
export default SearchBox;