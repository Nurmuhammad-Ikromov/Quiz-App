import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header>
			<div className='container'>
				<div className='header__inner'>
					<Link to = "/"> FinalExam</Link>
				</div>
			</div>
		</header>
	);
};
