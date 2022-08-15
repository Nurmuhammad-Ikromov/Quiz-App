import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { QuizTests } from './pages/Quiz/Quiztests';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { Result } from './pages/Result/Result';

function App() {
	const [quiz, setQuiz] = useState([]);
	const [score, setScore] = useState(0)
	
const fetchQuiz = async (category = "", number= "") => {
	const {data} = await axios.get(
		`https://opentdb.com/api.php?amount=${number}${
							category && `&category=${category}`
						}&type=multiple`
	);

	setQuiz(data.results)
	setScore(0)
}
	
	
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home fetchQuiz={fetchQuiz} />} />
				<Route path='/quiz' element={<QuizTests quiz={quiz} setQuiz={setQuiz}  score={score} setScore = {setScore} />} />
				<Route path="/result" element = {<Result score = {score}/>}/>	
			</Routes>
		</div>
	);
}

export default App;
