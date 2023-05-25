import {BTNfeedback,ContainetButonsFeedback} from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    

    const marcupButons = options.map(option => {
            return (<BTNfeedback key={option} onClick={onLeaveFeedback}>{option}</BTNfeedback>);
    });
    
    return <ContainetButonsFeedback>{marcupButons}</ContainetButonsFeedback>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};