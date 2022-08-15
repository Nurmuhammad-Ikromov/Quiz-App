import { Link } from "react-router-dom"

export const Result = ({score}) => {

    return (
        <>
        <h1>{score}</h1>
        <Link to="/quiz">Go Back</Link>
        </>
    )
}