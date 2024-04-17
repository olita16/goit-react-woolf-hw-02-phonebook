import css from '../Title/Title.module.css';
import PropTypes from 'prop-types';

const HeadText = ({ title }) => {
  return (
    <>
      <p className={css.headText}>{title}</p>
    </>
  );
};

HeadText.propTypes = {
  title: PropTypes.string,
};

export default HeadText;