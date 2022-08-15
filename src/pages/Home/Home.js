import { useState } from 'react';
import './Home.scss';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/MenuItem';
import Categories from '../../Data/Categories';
import {Link} from 'react-router-dom'

export function Home({ fetchQuiz }) {
	const [currency, setCurrency] = React.useState('');
	const [category, setCategory] = useState('9');
    const [number, setNumber] = useState('10')
 
	const handleSubmit = () => {
		fetchQuiz(category, number);
	};

	return (
		<div>
			<div className='settings w-50 mx-auto mt-5'>
				<TextField
					id='outlined-select-currency'
					select
					label='Number of questions'
					value={number}
					onChange={(event) => setNumber(event.target.value)}
					className='w-100 mb-3'
					// helperText='Please select your currency'
				>
					
						<MenuItem  key="10" value="10">
							10
						</MenuItem>
						<MenuItem key="15" value="15">
							15
						</MenuItem>
						<MenuItem key="20" value="20">
							20
						</MenuItem>
						<MenuItem key="25" value="25">
							25
						</MenuItem>
				
				</TextField>

				<TextField
					id='outlined-select-currency'
					select
					label='Select Category'
					value={category}
					onChange={(evt) => setCategory(evt.target.value)}
					className='w-100'
					// helperText='Please select your currency'
				>
					{Categories.map((el) => (
						<MenuItem key={el.category} value={el.value}>
							{el.category}
						</MenuItem>
					))}
				</TextField>

				<Link to="/quiz" onClick={handleSubmit}>
					Start
				</Link>
			</div>
		</div>
	);
}
