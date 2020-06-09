import React, { useState } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const SelectFieldInput = ({
  id,
  name,
  value,
  error,
  onChange,
  handleInputChange,
  placeholder,
  customStyle,
  containerStyle,
  icon,
  iconPositionRight,
  iconStyle,
  options,
  selected,
  readonly,
  focus,
  blur,
  multi,
  changeDefaultStyles,
  disabled
}) => {
  const multiSelectStyles = {
    control: (base) => ({
      ...base,
      border: '0 !important',
      boxShadow: '0 !important',
      '&:hover': {
        border: '0 !important'
      }
    }),
    valueContainer: () => ({
      display: 'flex',
      flex: '1',
      flexWrap: 'wrap',
      position: 'relative',
      overflow: 'hidden',
      alignItems: 'center',
      padding: '8px 8px'
    }),
    multiValue: () => ({
      backgroundColor: '#F7DB1D',
      display: 'flex',
      margin: '2px'
    }),
    multiValueRemove: () => ({
      backgroundColor: '#F7DB1D',
      paddingLeft: '4px',
      paddingRight: '4px',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: '#ffb700'
      }
    }),
    input: () => ({
      height: '30px'
    }),
    placeholder: () => ({
      color: 'hsl(0,0%,29%,0.45)',
      marginLeft: '0px',
      marginRight: '2px',
      position: 'absolute',
      top: '52%',
      transform: 'translateY(-50%)',
      fontSize: '14px'
    })
  };

  let selectOptions = options.map((option) => (
    <option key={option.value + '-' + option.label} value={option.value} disabled={option.value === 'SELECT' && true}>
      {option.label}
    </option>
  ));

  focus = () => {
    document.getElementById(id + '-container').classList.replace('border-si-grey-light', 'border-si-grey-dark');
  };

  blur = () => {
    document.getElementById(id + '-container').classList.replace('border-si-grey-dark', 'border-si-grey-light');
  };

  const [filterOptions, setfilterOptions] = useState(options);

  handleInputChange = (e) => {
    setfilterOptions(options.filter((opt) => opt.label.toLowerCase().startsWith(e.toLowerCase())));

    selectOptions = filterOptions.map((option) => (
      <option key={option.value + '-' + option.label} value={option.value} disabled={option.value === 'SELECT' && true}>
        {option.label}
      </option>
    ));
  };

  return (
    <>
      <div
        id={id + '-container'}
        className={`border-si-grey-light border-3 rounded-lg ${error && 'textInputError'} ${containerStyle}`}
      >
        <span style={iconPositionRight ? { order: 1 } : { order: 0 }} className={`flex items-center ${icon && 'pr-2'}`}>
          <img src={icon} className={iconStyle} alt='' />
        </span>
        {multi ? (
          <Select
            id={id}
            name={name}
            className={!changeDefaultStyles ? 'bg-white ' + customStyle : customStyle}
            styles={multiSelectStyles}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onInputChange={handleInputChange}
            options={filterOptions}
            isMulti={true}
            closeMenuOnSelect={false}
            isDisabled={disabled}
            onFocus={() => focus()}
            onBlur={() => blur()}
          />
        ) : (
          <select
            id={id}
            className={
              !changeDefaultStyles
                ? 'appearance-none bg-white px-2 py-2 focus:outline-none customInput ' + customStyle
                : customStyle
            }
            name={name}
            onChange={onChange}
            value={selected}
            readOnly={readonly}
            disabled={disabled}
            onFocus={() => focus()}
            onBlur={() => blur()}
          >
            {selectOptions}
          </select>
        )}
      </div>
      {error && <div className='text-sm text-error py-2'>{error}</div>}
    </>
  );
};

SelectFieldInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.array,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  customStyle: PropTypes.string,
  options: PropTypes.array.isRequired,
  containerStyle: PropTypes.string,
  icon: PropTypes.string,
  iconPositionRight: PropTypes.bool,
  iconStyle: PropTypes.string,
  changeDefaultStyles: PropTypes.bool,
  readonly: PropTypes.bool,
  multi: PropTypes.bool,
  focus: PropTypes.func,
  blur: PropTypes.func,
  selected: PropTypes.string,
  disabled: PropTypes.bool
};

export default SelectFieldInput;
