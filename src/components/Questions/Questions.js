// import { Button } from 'bootstrap';
import { Button } from '@mui/material';
import { useState } from 'react';
import './Questions.scss';

export const Question = ({
	currQues,
	setCurrQues,
	quiz,
	options,
	correct,
	setQuiz,
	score,
	setScore,
	setOrder
}) => {
	const [selected, setSelected] = useState();

	const handleSelect = (i) => {
		if (selected === i && selected === correct) return 'select';
		else if (selected === i && selected !== correct) return 'wrong';
		else if (i === correct) return 'select';
	};

	const handleCheck = (i) => {
		setSelected(i);
		if (i === correct) setScore(score + 1);
		console.log(score);
	};

	const handleNext = () => {
		// if (selected) {
			setCurrQues(currQues + 1);
			setOrder({start: currQues+1, end: currQues+2})
			setSelected();
			console.log(selected);

		// }
	};
	const handlePrew = () => {
		setCurrQues(currQues - 1);
		setOrder({start: currQues-1, end: currQues})
		setSelected();
	}

	// const handleSubmit = () => {
	// 	setSelected()
	// }

	const handleFinish = () => {
		handleSelect()
	}
	const handleQuit = () => {
		setCurrQues(0);
		setQuiz();
	};
	return (
		<div className='question'>
			<h1>Question {currQues + 1} :</h1>
			<p>{score}</p>

			<div className='singleQuestion'>
				{/* <h2>{quiz[currQues].question}</h2> */}
				<div className='options'>
					{options &&
						options.map((e) => (
							<button
								className={`singleOption  ${
									selected && handleSelect(e)
								} `}
								key={e}
								onClick={() => handleCheck(e)}
								disabled={selected}
								>
								{e}
							</button>
						))}
				</div>

				<div className='controls'>
					<Button
						color='secondary'
						href='/'
						onClick={() => handleQuit()}>
						Quit
					</Button>

					<Button
					onClick={handlePrew}>
						Prew Question
					</Button>

					{/* <Button onClick={handleSubmit}>Submit</Button> */}

					<Button
						// variant='contained'
						// color='primary'
						// size='large'
						// style={{ width: 185 }}
						onClick={handleNext}>
						Next Question
					</Button>

					<Button onClick={handleFinish}>End</Button>
				</div>
			</div>
		</div>
	);
};
