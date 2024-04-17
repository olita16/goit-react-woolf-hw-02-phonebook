import css from '../Input/Input.module.css';
import PropTypes from 'prop-types';

const LabelInput = ({
  handleInputChange,
  value,
  placeholder,
  type,
  name,
  pattern,
  title,
  labelName,
}) => {
  return (
    <label className={css.label}>
      <span className={css.span}>{labelName}</span>
      <input
        className={css.input}
        onChange={handleInputChange}
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        pattern={pattern}
        title={title}
        required
      />
    </label>
  );
};

LabelInput.propTypes = {
  handleInputChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  labelName: PropTypes.string,
};

export default LabelInput;
