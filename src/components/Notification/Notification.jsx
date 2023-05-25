import {TitleNotification} from './Notification.styled'
import PropTypes from 'prop-types';


export const Notification = ({ message }) => {

    return (<TitleNotification>{message}</TitleNotification>);
}


Notification.propTypes = {
  message: PropTypes.string.isRequired
};