import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onClick }) => (
  <button className={s.Button} type="button" onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
