import {TextFeedback,ListContainer} from './Statistics.styled'
import PropTypes from 'prop-types';


export const Statistics = ({ good, neutral, bad, total = 0, positivePercentage }) => {
    return (
        <>
            <ListContainer>
                <li><TextFeedback>Good: {good}</TextFeedback></li>
                <li><TextFeedback>Neutral: {neutral}</TextFeedback></li>
                <li><TextFeedback>Bad: {bad}</TextFeedback></li>
                <li><TextFeedback>Total: {total}</TextFeedback></li>
                <li><TextFeedback>Positive feedback: {positivePercentage}%</TextFeedback></li>
            </ListContainer>
        </>
    )
}

Statistics.propTypes = {
    good : PropTypes.number.isRequired,
    neutral : PropTypes.number.isRequired,
    bad : PropTypes.number.isRequired,
    total : PropTypes.number.isRequired,
    positivePercentage : PropTypes.number.isRequired
};