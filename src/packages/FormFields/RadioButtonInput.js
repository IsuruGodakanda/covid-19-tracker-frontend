import React from 'react';
import PropTypes from 'prop-types';

const RadioButtonInput = ({
  id,
  name,
  type,
  label,
  labelStyle,
  value,
  checked,
  onChange,
  customStyle,
  containerStyle,
  changeDefaultStyles,
  disabled,
  error
}) => {
  return (
    <>
      <div className={`relative pt-2 ${error && type === 'radio' && 'radioInputError'} ${containerStyle}`}>
        <input
          id={id}
          type={type}
          className={!changeDefaultStyles ? 'mr-2 ' + customStyle : customStyle}
          name={name}
          value={value}
          checked={type === 'radio' ? checked === value : value}
          onChange={onChange}
          disabled={disabled}
        />
        <span className='checkmark'></span>
        <label htmlFor={id} className={'text-si-grey-darker pl-10 relative ' + labelStyle}>
          {label}
        </label>
      </div>
      {error && type === 'checkbox' && <div className='text-sm text-error py-2 ml-10 '>{error}</div>}
    </>
  );
};

RadioButtonInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelStyle: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  customStyle: PropTypes.string,
  containerStyle: PropTypes.string,
  changeDefaultStyles: PropTypes.bool,
  error: PropTypes.string
};

export default RadioButtonInput;
