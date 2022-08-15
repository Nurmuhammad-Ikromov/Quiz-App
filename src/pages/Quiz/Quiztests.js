import { useEffect } from 'react';
import { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Question } from '../../components/Questions/Questions';
export const QuizTests = ({ quiz, setQuiz, score, setScore }) => {
	const [currQues, setCurrQues] = useState(0);
	const [order, setOrder] = useState({
		start: 0,
		end: 1,
	});
	const [options, setOptions] = useState();

	useEffect(() => {
		setOptions(
			quiz &&
				Random([(quiz[currQues]?.correct_answer), ...quiz[currQues]?.incorrect_answers ? [...quiz[currQues]?.incorrect_answers] : []])
		)
	}, [currQues, quiz])

	useEffect(() => {
		console.log(options);
	}, [options]);

	useEffect(() => {
		console.log(order);
	}, [order]);

	function Random(answer) {
		return answer.sort(() => Math.random() - 0.5);
	}

	const pageNumbers = [];
	for (let i = 0; i < quiz.length; i++) {
		pageNumbers.push(i + 1);
	}

	console.log(pageNumbers);

	return (
		<>
			<h1>Hi</h1>
			{pageNumbers.map((e) => (
				<button
					onClick={() => {
						setOrder({
							start: e - 1,
							end: e,
						},
						setCurrQues(e-1)
						);
					}}>
					{e}
				</button>
			))}
			{quiz.slice(order.start, order.end).map((el) => (
				<div>
					<h3>{el.question}</h3>
					<h4>{el.correct_answer}</h4>
				</div>
			))}

			<>
				
				<Question
					currQues={currQues}
					setCurrQues={setCurrQues}
					quiz={quiz}
					options={options}
					correct={quiz[currQues]?.correct_answer}
					score={score}
					setScore={setScore}
					setQuiz={setQuiz}
					setOrder={setOrder}
				/>

				<Footer/>
			</>
		</>
	);
};
