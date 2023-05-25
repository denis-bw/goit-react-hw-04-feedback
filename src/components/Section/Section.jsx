import {Title} from './Section.styled'
import PropTypes from 'prop-types';


export const Section = ({ title, children }) => {

    return (
        <><Title>{title}</Title>
          {children}
        </>
    );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};